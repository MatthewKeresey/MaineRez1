import type { Metadata } from 'next';
import CallToAction from '~/components/widgets/CallToAction';
import FAQs4 from '~/components/widgets/FAQs4';
import Hero from '~/components/widgets/Hero';
import { getContent } from '~/shared/content/content-helper';

export const metadata: Metadata = {
  title: 'FAQs',
};

const Page = () => {
  const pageContent = getContent('pages.faqs');
  const heroContent = getContent('sections.hero');
  const faqsContent = getContent('sections.faqs4');
  const callToActionContent = getContent('sections.callToAction');

  return (
    <>
      <Hero {...heroContent} />
      <FAQs4 {...faqsContent} />
      <CallToAction {...callToActionContent} />
    </>
  );
};

export default Page;
