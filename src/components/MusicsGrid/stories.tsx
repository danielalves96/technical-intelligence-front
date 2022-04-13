import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import MusicsGrid from './index';

export default {
  title: `Components/MusicsGrid`,
  component: MusicsGrid,
} as ComponentMeta<typeof MusicsGrid>;

const Template: ComponentStory<typeof MusicsGrid> = (args: any) => (
  <MusicsGrid {...args} />
);

export const Default = Template.bind({});

Default.args = {
  tracks: [
    {
      id: `1`,
      cover_art: `https://res.cloudinary.com/technical-intelligence/image/upload/v1649698616/1400x1400_5e151a6a07.jpg`,
      is_available: true,
    },
    {
      id: `2`,
      cover_art: `https://res.cloudinary.com/technical-intelligence/image/upload/v1649698616/1400x1400_5e151a6a07.jpg`,
      is_available: true,
    },
    {
      id: `3`,
      cover_art: `https://res.cloudinary.com/technical-intelligence/image/upload/v1649698616/1400x1400_5e151a6a07.jpg`,
      is_available: true,
    },
  ],
};
