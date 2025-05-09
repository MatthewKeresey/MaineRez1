import React from 'react';
import { IconClock, IconMail, IconPhoneCall } from '@tabler/icons-react';
import { ContactProps } from '~/shared/types';
import content from '~/shared/content/content.json';

const contactSection = content.sections.contact;

export const contactHome: ContactProps = {
  id: 'contact-on-home',
  hasBackground: true,
  header: {
    title: contactSection.header.title,
    subtitle: contactSection.header.subtitle,
    tagline: contactSection.header.tagline,
  },
  content: contactSection.content,
  items: [
    {
      title: contactSection.items[0].title,
      description: contactSection.items[0].description,
      icon: IconMail,
    },
    {
      title: contactSection.items[1].title,
      description: contactSection.items[1].description,
      icon: IconPhoneCall,
    },
    {
      title: contactSection.items[2].title,
      description: contactSection.items[2].description,
      icon: IconClock,
    },
  ],
  form: {
    title: contactSection.form.title,
    inputs: [
      {
        type: 'text',
        name: 'name',
        autocomplete: 'off',
        placeholder: contactSection.form.inputs[0].placeholder,
      },
      {
        type: 'email',
        name: 'email',
        autocomplete: 'on',
        placeholder: contactSection.form.inputs[1].placeholder,
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: contactSection.form.textarea.placeholder,
    },
    btn: {
      title: contactSection.form.btn.title,
      type: 'submit',
    },
  },
}; 