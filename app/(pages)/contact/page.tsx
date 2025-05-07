import { Metadata } from 'next';

import Contact from '~/components/widgets/Contact';
import Features2 from '~/components/widgets/Features2';
import Hero from '~/components/widgets/Hero';
import { heroContact, contactPage, features2Contact } from '~/shared/data/pages/contact.data';

export const metadata: Metadata = {
  title: 'Contact us',
};

const ContactPage = () => {
  return (
    <>
      <Hero {...heroContact} />
      <Contact {...contactPage} />
      <Features2 {...features2Contact} />
    </>
  );
};

export default ContactPage;
