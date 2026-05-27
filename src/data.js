import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Download',
      href: getPermalink('/download'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Github',
      href: 'https://github.com/cowxos',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: 'https://wiki.cowxos.org/cowxos_basic/why_cowxos/' },
        { text: 'Team', href: getPermalink('/about/#team') },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: 'https://wiki.cowxos.org/' },
        { text: 'Community Forum', href: 'https://discuss.cowxos.org/' },
      ],
    },
    {
      title: 'Distribution',
      links: [{ text: 'About', href: getPermalink('/about/#distribution') }],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: '#' },
    { text: 'Privacy Policy', href: '#' },
  ],
  socialLinks: [
    { arialabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/cowxos' },
    {
      arialabel: 'Discord',
      icon: 'tabler:brand-discord',
      href: 'https://discord.gg/cowxos',
    },
    { arialabel: 'Reddit', icon: 'tabler:brand-reddit', href: 'https://www.reddit.com/r/cowxos' },
    { arialabel: 'Patreon', icon: 'tabler:brand-patreon', href: 'https://www.patreon.com/CowxOS' },
    { arialabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/cowxos' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-xs bg-[url(~/assets/images/logo.svg)]"></span>
    Made by <a class="text-primary-600 dark:text-white font-bold decoration-gray-400 decoration-dotted underline" href="https://cowxos.org/"> CowxOS</a> · All rights reserved.
  `,
};
