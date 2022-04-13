import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import MusicDetails from './index';

export default {
  title: `Components/MusicDetails`,
  component: MusicDetails,
} as ComponentMeta<typeof MusicDetails>;

const Template: ComponentStory<typeof MusicDetails> = (args: any) => (
  <MusicDetails {...args} />
);

export const Default = Template.bind({});

Default.args = {
  track: {
    id: `1`,
    name: `Inside This`,
    description: `Mix & Master by: Audiosonic\n\nRelease by:\nRudá records\n\nFollow Technical Intelligence 👇🏻\n`,
    tone: `F#`,
    bpm: `145`,
    download_link: `https://pumpyoursound.com/f/technicalintelligence/technical-intelligence-inside-this/131150`,
    soundcloud: `https://soundcloud.com/technical-intelligence/inside-this`,
    youtube: `https://www.youtube.com/watch?v=eZkJktsv8Ps`,
    spotify: `https://open.spotify.com/album/2OwVgnLRArf27ovGoCFVzx?si=5IbYh3qFR7GRsGcx_BWcsA`,
    audio_file: `https://res.cloudinary.com/technical-intelligence/video/upload/v1649698651/INSIDE_V2_1_online_audio_converter_com_f31f2e811a.mp3`,
    cover_art: `https://res.cloudinary.com/technical-intelligence/image/upload/v1649698616/1400x1400_5e151a6a07.jpg`,
    title: `Inside This`,
    label: `Rudá Records`,
    is_available: true,
  },
};
