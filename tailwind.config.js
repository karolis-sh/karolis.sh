module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.js'],
  // Defaults:
  // https://github.com/tailwindlabs/tailwindcss/blob/e7d053444a95f82eeb4946fc3550dba62d31c75c/stubs/defaultConfig.stub.js
  theme: {
    screens: {
      sm: '480px',
      md: '839px',
      lg: '1024px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#000',
      white: '#fff',

      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
      teal: {
        100: '#e6fffa',
        200: '#b2f5ea',
        300: '#81e6d9',
        400: '#4fd1c5',
        500: '#38b2ac',
        600: '#319795',
        700: '#2c7a7b',
        800: '#285e61',
        900: '#234e52',
      },
    },
  },
  variants: {
    alignItems: ['responsive'],
    display: ['responsive'],
    flexDirection: ['responsive'],
    margin: ['responsive'],
    padding: ['responsive'],
    textAlign: ['responsive'],
  },
  corePlugins: {
    container: false,
  },
  separator: ':',
};
