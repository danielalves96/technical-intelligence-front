import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Container from '../Container';
import Logo from './index';

export default {
  title: `Components/Logo`,
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args: any) => (
  <Container>
    <Logo {...args} />
  </Container>
);

export const Default = Template.bind({});
