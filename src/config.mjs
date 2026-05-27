import defaultImage from './assets/images/default.png';

const CONFIG = {
  name: 'CowxOS',

  origin: 'https://cowxos.org/',
  basePathname: '/cowxos-website/',

  title: 'CowxOS — Performance-First Linux, Built on Arch',
  description:
    'CowxOS is a performance-optimized Arch Linux distribution with CPU-specific package builds, advanced kernel scheduling, and an effortless installation — delivering measurable speed gains without sacrificing simplicity.',
  defaultImage: defaultImage,

  defaultTheme: 'dark', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"
};

export const SITE = { ...CONFIG };
