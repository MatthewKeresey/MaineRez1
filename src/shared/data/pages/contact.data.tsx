import { IconClock, IconHeadset, IconHelp, IconMapPin, IconMessages, IconPhoneCall, IconMail } from '@tabler/icons-react';
import { ContactProps, FeaturesProps } from '~/shared/types';
import { HeroProps } from '~/shared/types';
import { getContent, getContentArray } from '~/shared/content/content-helper';

// Hero data on Contact page *******************
export const heroContact: HeroProps = {
  title: getContent('contact.hero.title'),
  subtitle: getContent('contact.hero.subtitle'),
  tagline: getContent('contact.hero.tagline'),
};

// Contact data on Contact page *******************
export const contactPage: ContactProps = {
  hasBackground: true,
  header: {
    title: getContent('contact.contact.header.title'),
    subtitle: getContent('contact.contact.header.subtitle'),
    tagline: getContent('contact.contact.header.tagline'),
  },
  content: getContent('contact.contact.content'),
  items: getContentArray('contact.contact.items').map(item => ({
    ...item,
    icon: [IconMail, IconPhoneCall, IconClock][item.iconIndex || 0],
  })),
  form: {
    title: getContent('contact.contact.form.title'),
    inputs: getContentArray('contact.contact.form.inputs'),
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: getContent('contact.contact.form.textarea.placeholder'),
    },
    btn: {
      title: getContent('contact.contact.form.btn.title'),
      type: 'submit',
    },
  },
};

// Feature2 data on Contact page *******************
export const features2Contact: FeaturesProps = {
  columns: 3,
  header: {
    title: getContent('contact.features2.header.title'),
    subtitle: getContent('contact.features2.header.subtitle'),
  },
  items: getContentArray('contact.features2.items').map(item => ({
    ...item,
    icon: [IconHelp, IconMessages, IconHeadset][item.iconIndex || 0],
  })),
};
