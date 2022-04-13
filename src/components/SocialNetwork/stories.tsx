import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { SocialNetwork } from './index';

export default {
  title: `Components/SocialNetwork`,
  component: SocialNetwork,
} as ComponentMeta<typeof SocialNetwork>;

const Template: ComponentStory<typeof SocialNetwork> = (args: any) => (
  <SocialNetwork {...args} />
);

export const Default = Template.bind({});
