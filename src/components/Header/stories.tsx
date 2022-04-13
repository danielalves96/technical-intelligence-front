import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Header from './index';

export default {
  title: `Components/Header`,
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args: any) => (
  <Header {...args} />
);

export const Default = Template.bind({});
