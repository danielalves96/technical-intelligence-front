import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Container from '../Container';
import AboutImage from './index';

export default {
  title: `Components/AboutImage`,
  component: AboutImage,
} as ComponentMeta<typeof AboutImage>;

const Template: ComponentStory<typeof AboutImage> = (args: any) => (
  <Container>
    <AboutImage {...args} />
  </Container>
);

export const Default = Template.bind({});
