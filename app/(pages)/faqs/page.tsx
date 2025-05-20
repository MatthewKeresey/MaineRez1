import type { Metadata } from 'next';
import CallToAction from '~/components/widgets/CallToAction';
import Hero from '~/components/widgets/Hero';
import { getContent } from '~/shared/content/content-helper';

export const metadata: Metadata = {
  title: 'FAQs',
};

const Page = () => {
  const pageContent = getContent('pages.faqs');
  const heroContent = getContent('sections.hero');
  const callToActionContent = getContent('sections.callToAction');

  return (
    <>
      {heroContent && <Hero {...heroContent} />}
      {callToActionContent && <CallToAction {...callToActionContent} />}
    </>
  );
};

export default Page;
