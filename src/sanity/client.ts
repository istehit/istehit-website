import { createClient } from 'next-sanity';

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "demo-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false,
};

export const client = createClient(config);

// Expected Sanity Schema to map against older dataset structure
export type SanityEvent = {
  _id: string;
  title: string;
  description: string;
  location: string;
  imgUrl: string;
  registration: boolean;
  registrationLink?: string;
  eventDate: string;
};
