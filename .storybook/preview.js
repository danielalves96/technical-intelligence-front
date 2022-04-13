import i18n from '../src/i18n';
import '../src/styles/global.scss';

import * as NextImage from "next/image";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  i18n,
  locale: 'pt_BR',
  locales: {
    en_US: 'English (US)',
    pt_BR: 'Portuguese (BR)',
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#111111',
      },
    ],
  },

}
