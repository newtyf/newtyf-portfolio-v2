/// <reference types="astro/client" />

type Runtime = import('@astrojs/cloudflare').Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {
    otherLocals: {
      test: string;
    };
  }
}
interface Window {
  dataLayer: any[];
  particlesJS: {
    load: (value: string, optionsPath: string, onload: Function) => {};
  };
}