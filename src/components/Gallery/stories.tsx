import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Gallery from './index';

export default {
  title: `Components/Gallery`,
  component: Gallery,
} as ComponentMeta<typeof Gallery>;

const Template: ComponentStory<typeof Gallery> = (args: any) => (
  <Gallery {...args} />
);

export const Default = Template.bind({});

Default.args = {
  images: [
    {
      original: `https://res.cloudinary.com/technical-intelligence/image/upload/v1649705880/Design_sem_nome_084665490c.png`,
      thumbnail: `https://res.cloudinary.com/technical-intelligence/image/upload/v1649705880/Design_sem_nome_084665490c.png`,
    },
    {
      original: `https://res.cloudinary.com/technical-intelligence/image/upload/v1649705880/Design_sem_nome_1_c81c1e66d5.png`,
      thumbnail: `https://res.cloudinary.com/technical-intelligence/image/upload/v1649705880/Design_sem_nome_1_c81c1e66d5.png`,
    },
  ],
};
