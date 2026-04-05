import { google } from 'googleapis';

const ROOT_FOLDER_ID = process.env.GOOGLE_DRIVE_FOLDER_ID || '15HRJh30n7onOiFZfLsrjNkTY3CZINmQu';
const API_KEY = process.env.GOOGLE_API_KEY || '';

export interface DriveEvent {
  id: string;
  name: string;
  photos: DrivePhoto[];
  thumbnailUrl: string | null;
}

export interface DrivePhoto {
  id: string;
  name: string;
  thumbnailUrl: string;
  webViewLink: string;
}

function getDriveClient() {
  return google.drive({
    version: 'v3',
    auth: API_KEY,
  });
}

/**
 * Returns a proxied image URL that fetches from Drive server-side.
 * Avoids CORS/auth issues with direct Drive thumbnail URLs in the browser.
 */
export function getDriveImageUrl(fileId: string): string {
  return `/api/drive-image?id=${fileId}`;
}

/**
 * Fetch all event subfolders inside the root "ISTE Website Memories" folder.
 */
export async function fetchEventFolders(): Promise<DriveEvent[]> {
  const drive = getDriveClient();

  // List subfolders (events)
  const foldersRes = await drive.files.list({
    q: `'${ROOT_FOLDER_ID}' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false`,
    fields: 'files(id, name)',
    orderBy: 'name desc',
    pageSize: 20,
  });

  const folders = foldersRes.data.files ?? [];

  // For each folder, fetch its images
  const events: DriveEvent[] = await Promise.all(
    folders.map(async (folder) => {
      const photosRes = await drive.files.list({
        q: `'${folder.id}' in parents and mimeType contains 'image/' and trashed = false`,
        fields: 'files(id, name, webViewLink)',
        pageSize: 20,
        orderBy: 'name',
      });

      const photos: DrivePhoto[] = (photosRes.data.files ?? []).map((f) => ({
        id: f.id!,
        name: f.name ?? '',
        thumbnailUrl: getDriveImageUrl(f.id!),
        webViewLink: f.webViewLink ?? `https://drive.google.com/file/d/${f.id}/view`,
      }));

      return {
        id: folder.id!,
        name: folder.name ?? 'Event',
        photos,
        thumbnailUrl: photos.length > 0 ? photos[0].thumbnailUrl : null,
      };
    })
  );

  return events;
}
