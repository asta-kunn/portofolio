import * as React from 'react';
import { Metadata } from 'next';
import METADATA from '@/constant/metadata';
import BlogViews from '@/views/blog';

export const metadata: Metadata = {
  title: `Blog ${METADATA.exTitle}`,
  description: 'My blogs content sharing about programming specially full-stack web development and data tech',
  keywords: 'blog rifqiadli, rifqiadli',
  alternates: {
    canonical: `${process.env.DOMAIN}/blog`,
  },
};

export default function BlogPage() {
  return (
    <BlogViews />
  );
}
