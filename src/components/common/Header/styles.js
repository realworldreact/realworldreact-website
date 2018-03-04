export default () => ({
  root: {
    padding: 20,
    userSelect: 'none'
  },
  logo: {
    display: 'inline-block',
    height: 60
  },
  logoLink: {
    outline: 'none'
  },
  menu: {
    display: 'flex',
    textAlign: 'right'
  },
  desktop: {
    display: 'none'
  },

  // small +
  '@media screen and (min-width: 48em)': {
    mobile: {
      display: 'none'
    },
    desktop: {
      display: 'flex'
    }
  }
});
