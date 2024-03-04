export enum Category {
  ALL,
  FRONTEND,
  BACKEND,
  FULLSTACK,
  MOBILE,
  FREELANCE,
}

export type option = {
  title: string;
  link: string;
  styleCustom?: boolean;
};

export type job = {
  title: string;
  description: string[];
  role: string;
  start: string;
  end: string;
};

export type project = {
  title: string;
  category: Category;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  liveSite?: string;
};