export type ProjectCategory = 'all' | 'networking' | 'development' | 'design';

export interface Project {
  id: string;
  title: string;
  category: 'networking' | 'development' | 'design';
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100 for visual bar / representation
  description?: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  color: string; // Tailwind accent color key, e.g. 'blue', 'cyan', 'purple'
  skills: SkillItem[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  category: 'networking' | 'development' | 'design' | 'general';
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  credentialId?: string;
}
