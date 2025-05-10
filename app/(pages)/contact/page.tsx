import type { Metadata } from 'next';
import ContactForm from '~/components/widgets/ContactForm';
import Hero from '~/components/widgets/Hero';
import { getContent } from '~/shared/content/content-helper';

export const metadata: Metadata = {
  title: 'Contact',
};

const Page = () => {
  const pageContent = getContent('pages.contact');
  const heroContent = getContent('sections.hero');
  const contactFormContent = getContent('sections.contactForm');

  return (
    <>
      <Hero {...heroContent} />
      <ContactForm {...contactFormContent} />
    </>
  );
};

export default Page;
