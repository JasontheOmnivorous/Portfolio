export interface Project {
  id: number;
  name: string;
  description: string;
  link: string;
}

export interface TechStack {
  id: number;
  icon: any;
  label: string;
}

export interface ProjectDetail {
  id: number;
  name: string;
  apiDocs?: string;
  image?: any;
  description: string;
  link: string;
  technologiesUsed: string[];
}
