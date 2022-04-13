import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { PagesList } from './index';

export default {
  title: `Components/PagesList`,
  component: PagesList,
} as ComponentMeta<typeof PagesList>;

const Template: ComponentStory<typeof PagesList> = (args: any) => (
  <PagesList {...args} />
);

export const Default = Template.bind({});
