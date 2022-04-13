module.exports = {
  stories: ['../src/components/**/stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-react-i18next',
    '@storybook/preset-scss'
  ],
  framework: '@storybook/react',
  staticDirs: ['../public', '../static', { from: '../images', to: '/assets' }],
};
