declare global {
  interface Window {
    particlesJS: {
      load: (value: string, optionsPath: string, onload: Function) => {};
    };
    gtag: any;
  }
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
  github: string;
  liveSite?: string;
};

export { option, job, project };
