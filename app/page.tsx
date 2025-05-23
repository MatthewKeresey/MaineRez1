import React from 'react';
import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import SocialProof from '../src/components/widgets/SocialProof';
import Features from '~/components/widgets/Features';
import Content from '~/components/widgets/Content';
import Steps from '~/components/widgets/Steps';
import Testimonials from '~/components/widgets/Testimonials';
import FAQs2 from '~/components/widgets/FAQs2';
import Pricing from '~/components/widgets/Pricing';
import Team from '~/components/widgets/Team';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import {
  callToAction2Home,
  contactHome,
  contentHomeOne,
  contentHomeTwo,
  heroHome,
  pricingHome,
  socialProofHome,
  testimonialsHome,
} from '~/shared/data/pages/home.data';
import { getFeaturesHome, getStepsHome, getTeamHome } from '~/shared/data/pages/home';
import { getFaqsHome } from '~/shared/data/pages/home/faqs.data';

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      <Hero {...heroHome} />
      <SocialProof {...socialProofHome} />
      <Features {...getFeaturesHome()} />
      <Content {...contentHomeOne} />
      <Content {...contentHomeTwo} />
      <Steps {...getStepsHome()} />
      <Testimonials {...testimonialsHome} />
      <FAQs2 {...getFaqsHome()} />
      <Pricing {...pricingHome} />
      <Team {...getTeamHome()} />
      <Contact {...contactHome} />
      <CallToAction2 {...callToAction2Home} />
    </>
  );
}
