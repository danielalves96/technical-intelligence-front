import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import SectionTitle from './index';

export default {
  title: `Components/SectionTitle`,
  component: SectionTitle,
} as ComponentMeta<typeof SectionTitle>;

const Template: ComponentStory<typeof SectionTitle> = (args: any) => (
  <SectionTitle {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: `Title`,
};
