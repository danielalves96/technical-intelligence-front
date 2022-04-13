import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ContactGrid from './index';

export default {
  title: `Components/ContactGrid`,
  component: ContactGrid,
} as ComponentMeta<typeof ContactGrid>;

const Template: ComponentStory<typeof ContactGrid> = (args: any) => (
  <ContactGrid {...args} />
);

export const Default = Template.bind({});
