import type { Metadata } from 'next';
import Contact from '~/components/widgets/Contact';
import Hero from '~/components/widgets/Hero';
import { getContent } from '~/shared/content/content-helper';

export const metadata: Metadata = {
  title: 'Contact',
};

const Page = () => {
  const pageContent = getContent('pages.contact');
  const heroContent = getContent('sections.hero');
  const contactContent = getContent('sections.contact');

  return (
    <>
      <Hero {...heroContent} />
      <Contact {...contactContent} />
    </>
  );
};

export default Page;
