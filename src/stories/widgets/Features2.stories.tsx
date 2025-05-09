import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Title, Subtitle, Description, Primary, Controls, Story, Stories } from '@storybook/blocks';

import Component from '~/components/widgets/Features2';
import { getFeaturesHome } from '~/shared/data/pages/home';
const mockData = getFeaturesHome();

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Widgets/Features2',
  component: Component,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
    // Offers several doc blocks to help document your components. More info: https://storybook.js.org/docs/writing-docs/doc-blocks
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls exclude={['id', 'header', 'image', 'isImageDisplayed', 'isBeforeContent', 'isAfterContent']} />
          <Stories includePrimary={false} title={'Stories'} />
        </>
      ),
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Component>;

export default meta;

export const Default: StoryObj<typeof Component> = {
  args: mockData,
};

export const WithBackground: StoryObj<typeof Component> = {
  args: {
    ...mockData,
    hasBackground: true,
  },
};

export const OneColumn: StoryObj<typeof Component> = {
  args: {
    ...mockData,
    columns: 1,
  },
};

export const TwoColumns: StoryObj<typeof Component> = {
  args: {
    ...mockData,
    columns: 2,
  },
};

export const Mobile: StoryObj<typeof Component> = {
  args: {
    ...mockData,
  },
  parameters: {
    viewport: {
      defaultViewport: 'SMALL',
    },
  },
};
