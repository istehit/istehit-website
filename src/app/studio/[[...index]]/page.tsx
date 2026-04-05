'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config'; // Relative import to the root config

export default function StudioPage() {
  return <NextStudio config={config} />;
}
