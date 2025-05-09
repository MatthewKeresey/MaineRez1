import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
  IconChevronDown,
  IconRss,
} from '@tabler/icons-react';
import { AnnouncementProps, FooterProps, HeaderProps } from '../types';
import { getContent, getContentArray } from '~/shared/content/content-helper';

// Announcement data
export const announcementData: AnnouncementProps = {
  title: getContent('announcement.title'),
  callToAction: {
    text: getContent('announcement.callToAction.text'),
    href: getContent('announcement.callToAction.href'),
  },
  callToAction2: {
    text: getContent('announcement.callToAction2.text'),
    href: getContent('announcement.callToAction2.href'),
  },
};

// Header data
export const headerData: HeaderProps = {
  links: getContentArray('navigation.header.links'),
  actions: getContentArray('navigation.header.actions'),
  isSticky: getContent('navigation.header.settings.isSticky') === 'true',
  showToggleTheme: getContent('navigation.header.settings.showToggleTheme') === 'true',
  showRssFeed: getContent('navigation.header.settings.showRssFeed') === 'true',
  position: getContent('navigation.header.settings.position') as 'right' | 'left' | 'center',
  logo: {
    src: getContent('navigation.header.logo.src'),
    alt: getContent('navigation.header.logo.alt'),
  },
};

// Footer data
export const footerData: FooterProps = {
  title: getContent('navigation.footer2.title'),
  links: getContentArray('navigation.footer2.links'),
  columns: getContentArray('navigation.footer2.columns'),
  socials: getContentArray('navigation.footer2.socials'),
  footNote: getContent('navigation.footer2.footNote'),
};

// Footer2 data
export const footerData2: FooterProps = {
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Visit Us',
      texts: ['123 Old Port Way', 'Portland, ME 04101'],
    },
    {
      title: 'Contact',
      texts: ['Phone: (207) 555-0123', 'Email: Portland@mainerez.com'],
    },
    {
      title: 'Hours',
      texts: ['Open Daily: 9AM - 5PM', '24/7 Online Booking'],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'RSS', icon: IconRss, href: '#' },
  ],
  footNote: (
    <div className="mr-4 rtl:mr-0 rtl:ml-4 text-sm">
      <span className="float-left rtl:float-right mr-1.5 rtl:mr-0 rtl:ml-1.5 h-5 w-5 rounded-sm bg-[url(/images/MaineRez1.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      <span>
        Experience the best of Portland, Maine — from our famous seafood to stunning coastal views.
        <a
          className="font-semibold text-slate-900 dark:text-gray-200 hover:text-blue-600 hover:underline dark:hover:text-blue-600"
          href="/about"
        >
          {' '}
          Start Exploring
        </a>
      </span>
    </div>
  ),
};
