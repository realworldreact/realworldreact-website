export default theme => ({
  root: {
    padding: 20
  },
  contact: {
    position: 'relative',
    top: 0,
    marginBottom: 30
  },
  logo: {
    width: 100,
    height: 100
  },
  social: {
    textAlign: 'center',
    '& img': {
      width: 40,
      height: 40,
      marginBottom: 10
    }
  },
  socialButton: {
    //
  },
  centerContainer: {
    maxWidth: '100%',
    margin: [40, 0, 0]
  },
  blockTitle: {
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
  copy: {
    fontSize: 10,
    fontStyle: 'italic',
    textAlign: 'center',
    padding: [60, 0, 20],
    fontFamily: theme.typography.secondary,
    color: '#fff'
  },

  // small +
  '@media screen and (min-width: 48em)': {
    contact: {
      marginBottom: -60,
      top: -120
    },
    socialButton: {
      transition: 'all 200ms ease-out',
      '&:hover': {
        opacity: 0.5
      }
    },
    centerContainer: {
      maxWidth: 320,
      margin: [0, 'auto']
    }
  }
});
