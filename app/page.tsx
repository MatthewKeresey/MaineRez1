import type { Metadata } from 'next';
import Announcement from '~/components/widgets/Announcement';
import CallToAction from '~/components/widgets/CallToAction';
import Content from '~/components/widgets/Content';
import FAQs from '~/components/widgets/FAQs';
import Features from '~/components/widgets/Features';
import Features2 from '~/components/widgets/Features2';
import Hero from '~/components/widgets/Hero';
import Pricing from '~/components/widgets/Pricing';
import Testimonials from '~/components/widgets/Testimonials';
import { getContent } from '~/shared/content/content-helper';

export const metadata: Metadata = {
  title: 'Home',
};

const Page = () => {
  const pageContent = getContent('pages.home');
  const announcementContent = getContent('sections.announcement');
  const heroContent = getContent('sections.hero');
  const featuresContent = getContent('sections.features');
  const features2Content = getContent('sections.features2');
  const contentOne = getContent('sections.contentOne');
  const contentTwo = getContent('sections.contentTwo');
  const testimonialsContent = getContent('sections.testimonials');
  const faqsContent = getContent('sections.faqs');
  const pricingContent = getContent('sections.pricing');
  const callToActionContent = getContent('sections.callToAction');

  return (
    <>
      <Announcement {...announcementContent} />
      <Hero {...heroContent} />
      <Features {...featuresContent} />
      <Features2 {...features2Content} />
      <Content {...contentOne} />
      <Content {...contentTwo} />
      <Testimonials {...testimonialsContent} />
      <FAQs {...faqsContent} />
      <Pricing {...pricingContent} />
      <CallToAction {...callToActionContent} />
    </>
  );
};

export default Page;
