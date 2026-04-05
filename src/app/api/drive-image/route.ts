import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const fileId = searchParams.get('id');
  const apiKey = process.env.GOOGLE_API_KEY;

  if (!fileId) {
    return new NextResponse('Missing id param', { status: 400 });
  }

  if (!apiKey) {
    return new NextResponse('Missing API key', { status: 500 });
  }

  try {
    // Use Google Drive's export/thumbnail endpoint with API key
    const driveUrl = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${apiKey}`;
    const response = await fetch(driveUrl, {
      headers: { 'Accept': 'image/*' },
    });

    if (!response.ok) {
      // Fallback: try the thumbnail endpoint
      const thumbUrl = `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`;
      const thumbResponse = await fetch(thumbUrl);
      if (!thumbResponse.ok) {
        return new NextResponse('Image not found', { status: 404 });
      }
      const contentType = thumbResponse.headers.get('content-type') ?? 'image/jpeg';
      const buffer = await thumbResponse.arrayBuffer();
      return new NextResponse(buffer, {
        headers: {
          'Content-Type': contentType,
          'Cache-Control': 'public, max-age=86400', // cache 24h
        },
      });
    }

    const contentType = response.headers.get('content-type') ?? 'image/jpeg';
    const buffer = await response.arrayBuffer();
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400',
      },
    });
  } catch (e) {
    console.error('[drive-image proxy] error:', e);
    return new NextResponse('Failed to fetch image', { status: 500 });
  }
}
