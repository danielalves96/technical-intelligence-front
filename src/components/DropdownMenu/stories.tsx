import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import DropdownMenu from './index';

export default {
  title: `Components/DropdownMenu`,
  component: DropdownMenu,
} as ComponentMeta<typeof DropdownMenu>;

const Template: ComponentStory<typeof DropdownMenu> = (args: any) => (
  <DropdownMenu {...args} />
);

export const Default = Template.bind({});
