export type Project = {
  id: number;
  project_number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string | null;
  link: string | null;
  featured: boolean;
};