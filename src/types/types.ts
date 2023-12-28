export interface Project {
  id: number;
  name: string;
  description: string;
  photo?: string;
  apiDocs?: string;
  link: string;
}

export interface TechStack {
  id: number;
  icon: any;
  label: string;
}
