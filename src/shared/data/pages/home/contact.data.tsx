import React from 'react';
import { IconClock, IconMail, IconPhoneCall } from '@tabler/icons-react';
import { ContactProps } from '~/shared/types';
import { getContent, getContentObject } from '~/shared/content/content-helper';

const contactContent = getContentObject('home.contact');

export const contactHome: ContactProps = {
  id: 'contact-on-home',
  hasBackground: true,
  header: {
    title: getContent('home.contact.title'),
    subtitle: getContent('home.contact.subtitle'),
    tagline: getContent('home.contact.tagline'),
  },
  content: getContent('home.contact.content'),
  items: [
    {
      title: contactContent.items.email.title,
      description: contactContent.items.email.description,
      icon: IconMail,
    },
    {
      title: contactContent.items.business.title,
      description: contactContent.items.business.description,
      icon: IconPhoneCall,
    },
    {
      title: contactContent.items.hours.title,
      description: contactContent.items.hours.description,
      icon: IconClock,
    },
  ],
  form: {
    title: contactContent.form.title,
    inputs: [
      {
        type: 'text',
        name: 'name',
        autocomplete: 'off',
        placeholder: contactContent.form.inputs.name.placeholder,
      },
      {
        type: 'email',
        name: 'email',
        autocomplete: 'on',
        placeholder: contactContent.form.inputs.email.placeholder,
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: contactContent.form.textarea.placeholder,
    },
    btn: {
      title: contactContent.form.button.title,
      type: 'submit',
    },
  },
}; 