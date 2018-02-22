export default () => ({
  root: {
    padding: 20,
  },
  logo: {
    display: 'inline-block',
    height: 60,
  },
  menu: {
    display: 'flex',
    textAlign: 'right',
  },
  desktop: {
    display: 'none',
  },

  // small +
  '@media screen and (min-width: 48em)': {
    mobile: {
      display: 'none',
    },
    desktop: {
      display: 'flex',
    },
  },
});
