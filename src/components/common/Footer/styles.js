export default () => ({
  root: {
    padding: 20
  },
  logo: {
    width: 100,
    height: 100
  },
  social: {
    maxWidth: 100,
    float: 'right',
    '& img': {
      width: 40,
      height: 40,
      marginBottom: 10
    }
  },
  bockTitle: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 15
  },
  siteMapLink: {
    color: '#fff',
    fontSize: 14,
    textDecoration: 'underline',
    display: 'block'
  },

  // small +
  '@media screen and (min-width: 48em)': {
    social: {
      float: 'left'
    }
  }
});
