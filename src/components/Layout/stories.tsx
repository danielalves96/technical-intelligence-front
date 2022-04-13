import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Layout from './index';

export default {
  title: `Components/Layout`,
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args: any) => (
  <Layout {...args} />
);

export const Default = Template.bind({});
