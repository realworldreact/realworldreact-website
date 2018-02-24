export default theme => ({
  root: {
    marginTop: 40
  },
  brand: {
    width: '50%',
    display: 'block',
    textAlign: 'center',
    float: 'left',
    marginBottom: 5,
    '& img': {
      diplay: 'block'
    }
  },
  name: {
    fontFamily: theme.typography.secondary,
    fontStyle: 'italic',
    fontSize: 16,
    height: 40,
    lineHeight: '20px',
    padding: [0, 10],
  },
  // small +
  '@media screen and (min-width: 48em)': {
    brand: {
      width: '14.28%',
      marginBottom: 45,
    },
    name: {
      padding: [0, 0]
    }
  },
});
