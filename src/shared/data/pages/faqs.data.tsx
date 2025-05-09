import { CallToActionProps, FAQsProps } from '~/shared/types';
import { HeroProps } from '~/shared/types';
import { getContent, getContentArray } from '~/shared/content/content-helper';

// Hero data on FAQs page *******************
export const heroFaqs: HeroProps = {
  title: getContent('faqs.hero.title'),
  subtitle: getContent('faqs.hero.subtitle'),
  tagline: getContent('faqs.hero.tagline'),
};

// FAQS4 data on FAQs page *******************
export const faqs4Faqs: FAQsProps = {
  id: 'faqsFour-on-faqs',
  hasBackground: true,
  header: {
    title: getContent('faqs.faqs4.header.title'),
    subtitle: getContent('faqs.faqs4.header.subtitle'),
    position: 'center',
  },
  tabs: getContentArray('faqs.faqs4.tabs'),
};

// CallToAction data on FAQs page *******************
export const callToActionFaqs: CallToActionProps = {
  id: 'callToAction-on-faqs',
  hasBackground: true,
  title: getContent('faqs.callToAction.title'),
  subtitle: getContent('faqs.callToAction.subtitle'),
  callToAction: {
    text: getContent('faqs.callToAction.callToAction.text'),
    href: getContent('faqs.callToAction.callToAction.href'),
  },
};
