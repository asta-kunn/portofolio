export type MetadataBlog = {
  title: string
  subtitle: string
  date: string
  tags: string[]
  language: 'Bahasa Indonesia' | 'Engglish'
  readingDuration: number // in minute
  image: string
};

export type MetadataProject = {
  title: string
  subtitle: string
  date: string
  thumbnail: string
  theme: string
  stacks: string[]
  projectType: string
  repository: string
  livePreview: string
  image: string
};

export type MdxFileProps = {
  id:string
  slug: string
  frontMatter: Record<string, unknown>
  content: string
};
