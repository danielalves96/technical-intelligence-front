import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import MusicsGridDetailed from './index';

export default {
  title: `Components/MusicsGridDetailed`,
  component: MusicsGridDetailed,
} as ComponentMeta<typeof MusicsGridDetailed>;

const Template: ComponentStory<typeof MusicsGridDetailed> = (args: any) => (
  <MusicsGridDetailed {...args} />
);

export const Default = Template.bind({});

Default.args = {
  tracks: [
    {
      id: `1`,
      cover_art: `https://res.cloudinary.com/technical-intelligence/image/upload/v1649698616/1400x1400_5e151a6a07.jpg`,
      title: `Inside This`,
      label: `Rudá Records`,
      is_available: true,
    },
    {
      id: `2`,
      cover_art: `https://res.cloudinary.com/technical-intelligence/image/upload/v1649698616/1400x1400_5e151a6a07.jpg`,
      title: `Inside This`,
      label: `Rudá Records`,
      is_available: true,
    },
    {
      id: `3`,
      cover_art: `https://res.cloudinary.com/technical-intelligence/image/upload/v1649698616/1400x1400_5e151a6a07.jpg`,
      title: `Inside This`,
      label: `Rudá Records`,
      is_available: true,
    },
  ],
};
