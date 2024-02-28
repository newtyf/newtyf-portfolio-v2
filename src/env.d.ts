/// <reference types="astro/client" />
interface Window {
  dataLayer: any[];
  particlesJS: {
    load: (value: string, optionsPath: string, onload: Function) => {};
  };
}

type option = {
  title: string;
  link: string;
  styleCustom?: boolean;
};

type job = {
  title: string;
  description: string[];
  role: string;
  start: string;
  end: string;
};

type project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  liveSite?: string;
};