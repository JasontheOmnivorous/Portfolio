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

interface ApiTestImage {
  id: number;
  image: any;
}

export interface ProjectDetail {
  id: number;
  name: string;
  apiDocs?: string;
  apiTestImg?: ApiTestImage[];
  image?: any;
  description: string;
  link: string;
  technologiesUsed: string[];
}
