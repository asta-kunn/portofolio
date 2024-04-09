import * as React from 'react';
import { Metadata } from 'next';
import METADATA from '@/constant/metadata';
import AboutView from '@/views/about';

export const metadata: Metadata = {
  title: `About ${METADATA.exTitle}`,
  description: 'About page on rifqiadli, contains my biodata and my journy why i\'am interest to become a front-end and back-end web developer',
  keywords: 'about rifqiadli, rifqiadli about, Muhammad Rifqi Adli Gumay about, about Muhammad Rifqi Adli Gumay',
  alternates: {
    canonical: `${process.env.DOMAIN}/about`,
  },
};

export default function AboutPage() {
  return (
    <AboutView />
  );
}
