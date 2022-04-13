import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Footer from './index';

export default {
  title: `Components/Footer`,
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args: any) => (
  <Footer {...args} />
);

export const Default = Template.bind({});
