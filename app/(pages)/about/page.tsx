import React from 'react';
import type { Metadata } from 'next';
import Contact from '~/components/widgets/Contact';
import FAQs from '~/components/widgets/FAQs';
import Features from '~/components/widgets/Features';
import Features3 from '~/components/widgets/Features3';
import Features4 from '~/components/widgets/Features4';
import Hero2 from '~/components/widgets/Hero2';
import Stats from '~/components/widgets/Stats';
import Steps from '~/components/widgets/Steps';
import Team2 from '~/components/widgets/Team2';
import Testimonials2 from '~/components/widgets/Testimonials2';
import { getContent } from '~/shared/content/content-helper';

export const metadata: Metadata = {
  title: 'About us',
};

const Page = () => {
  const pageContent = getContent('pages.about');
  const heroContent = getContent('sections.hero');
  const featuresContent = getContent('sections.features4');
  const teamContent = getContent('sections.team2');
  const testimonialsContent = getContent('sections.testimonials2');
  const faqsContent = getContent('sections.faqs');
  const contactContent = getContent('sections.contact');

  return (
    <>
      {heroContent && <Hero2 {...heroContent} />}
      {featuresContent && <Features4 {...featuresContent} />}
      {teamContent && <Team2 {...teamContent} />}
      {testimonialsContent && <Testimonials2 {...testimonialsContent} />}
      {faqsContent && <FAQs {...faqsContent} />}
      {contactContent && <Contact {...contactContent} />}
    </>
  );
};

export default Page;
