import * as React from 'react';
import { Metadata } from 'next';
import ProjectsView from '@/views/projects';
import METADATA from '@/constant/metadata';

export const metadata: Metadata = {
  title: `Projects ${METADATA.exTitle}`,
  description: 'My Projects content sharing about my journey learning programming specially full-stack web development and data tech',
  keywords: 'projects rifqiadli, rifqiadli projects, muhammad rifqi adli gumay projects',
  alternates: {
    canonical: `${process.env.DOMAIN}/projects`,
  },
};

export default function ProjectsPage() {
  return (
    <ProjectsView />
  );
}
