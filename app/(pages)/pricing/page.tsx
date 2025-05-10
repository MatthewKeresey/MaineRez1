import type { Metadata } from 'next';
import CallToAction from '~/components/widgets/CallToAction';
import Content from '~/components/widgets/Content';
import Hero from '~/components/widgets/Hero';
import Pricing from '~/components/widgets/Pricing';
import Comparison from '~/components/widgets/Comparison';
import FAQs3 from '~/components/widgets/FAQs3';
import { getContent } from '~/shared/content/content-helper';
import { heroPricing, comparisonPricing, faqs3Pricing, pricingPricing } from '~/shared/data/pages/pricing.data';

export const metadata: Metadata = {
  title: 'Pricing',
};

const Page = () => {
  const pageContent = getContent('pages.pricing');
  const heroContent = getContent('sections.hero');
  const pricingContent = getContent('sections.pricing');
  const contentOne = getContent('sections.contentOne');
  const callToActionContent = getContent('sections.callToAction');

  return (
    <>
      <Hero {...heroContent} />
      <Pricing {...pricingContent} />
      <Content {...contentOne} />
      <CallToAction {...callToActionContent} />
      <Comparison {...comparisonPricing} />
      <FAQs3 {...faqs3Pricing} />
    </>
  );
};

export default Page;
