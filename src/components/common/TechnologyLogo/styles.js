export default theme => ({
  root: {
    width: '50%',
    textAlign: 'center',
    marginBottom: 25,
    '& img': {
      diplay: 'block'
    }
  },
  name: {
    fontFamily: theme.typography.secondary,
    fontStyle: 'italic',
    fontSize: 16,
    lineHeight: '20px',
    padding: [0, 10],
  },
  logo: {
    width: 60,
    height: 60
  },

  // small +
  '@media screen and (min-width: 48em)': {
    root: {
      width: '14.28%',
      marginBottom: 45,
    },
    name: {
      padding: 0
    }
  },
});
