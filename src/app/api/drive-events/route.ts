import { NextResponse } from 'next/server';
import { fetchEventFolders } from '@/lib/drive';

export const revalidate = 300; // cache for 5 minutes

export async function GET() {
  try {
    const events = await fetchEventFolders();
    return NextResponse.json({ events });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('[Drive API] Failed to fetch events:', message);
    return NextResponse.json(
      { events: [], error: message },
      { status: 500 }
    );
  }
}
