import { Metadata } from 'next';
import CallToAction from '~/components/widgets/CallToAction';
import Content from '~/components/widgets/Content';
import FAQs from '~/components/widgets/FAQs';
import Features2 from '~/components/widgets/Features2';
import Features4 from '~/components/widgets/Features4';
import Hero from '~/components/widgets/Hero';
import Testimonials from '~/components/widgets/Testimonials';
import { getContent } from '~/shared/content/content-helper';

export const metadata: Metadata = {
  title: 'Services',
};

const Page = () => {
  const pageContent = getContent('pages.services');
  const heroContent = getContent('sections.hero');
  const features2Content = getContent('sections.features2');
  const contentOne = getContent('sections.contentOne');
  const contentTwo = getContent('sections.contentTwo');
  const features4Content = getContent('sections.features4');
  const testimonialsContent = getContent('sections.testimonials');
  const faqsContent = getContent('sections.faqs');
  const callToActionContent = getContent('sections.callToAction');

  return (
    <>
      <Hero {...heroContent} />
      <Features2 {...features2Content} />
      <Content {...contentOne} />
      <Content {...contentTwo} />
      <Features4 {...features4Content} />
      <Testimonials {...testimonialsContent} />
      <FAQs {...faqsContent} />
      <CallToAction {...callToActionContent} />
    </>
  );
};

export default Page;
