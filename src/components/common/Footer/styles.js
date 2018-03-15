export default theme => ({
  root: {
    padding: 20
  },
  headerContent: {
    position: 'relative',
    marginBottom: 40
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
    width: 40,
    height: 40,
    background: '#ffffff',
    display: 'inline-block',
    borderRadius: '50%',
    lineHeight: '40px',
    margin: [0, 10, 10],
    color: theme.palette.black.contrastText,
    fontSize: 22
  },
  centerContainer: {
    maxWidth: '100%',
    margin: [40, 0]
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
    headerContent: {
      marginBottom: -40,
      top: -120
    },
    socialButton: {
      transition: 'all 200ms ease-out',
      '&:hover': {
        color: theme.palette.primary.light
      }
    },
    centerContainer: {
      maxWidth: 320,
      margin: [0, 'auto']
    }
  }
});
