import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ContactForm from './index';

export default {
  title: `Components/ContactForm`,
  component: ContactForm,
} as ComponentMeta<typeof ContactForm>;

const Template: ComponentStory<typeof ContactForm> = (args: any) => (
  <ContactForm {...args} />
);

export const Default = Template.bind({});
