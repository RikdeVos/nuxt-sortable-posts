/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    colors: {
      primary: '#6257b0',
      secondary: '#75fc93',
      white: '#ffffff',
      dark: '#454545',
      medium: '#d7d7d7',
      light: '#f5f5f5',
      secondaryDark: '#344139',
    },
    extend: {
      transitionTimingFunction: {
        'ease-out-bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    transitionProperty: ['responsive', 'hover', 'focus'],
    borderWidth: ['responsive', 'last'],
  },
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
