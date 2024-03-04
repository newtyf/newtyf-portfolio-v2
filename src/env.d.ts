/// <reference types="astro/client" />
interface Window {
  dataLayer: any[];
  particlesJS: {
    load: (value: string, optionsPath: string, onload: Function) => {};
  };
}