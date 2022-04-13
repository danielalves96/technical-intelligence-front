import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ContainerDesktop from '../ContainerDesktop';
import AboutDescription from './index';

export default {
  title: `Components/AboutDescription`,
  component: AboutDescription,
} as ComponentMeta<typeof AboutDescription>;

const Template: ComponentStory<typeof AboutDescription> = (args: any) => (
  <ContainerDesktop>
    <AboutDescription {...args} />
  </ContainerDesktop>
);

export const Default = Template.bind({});
