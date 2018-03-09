export default theme => ({
  root: {
    textAlign: 'center',
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
    display: props => (props.hideNameOnSmall ? 'none' : 'block')
  },
  logo: {
    width: 60,
    height: 60
  },

  // small +
  '@media screen and (min-width: 48em)': {
    root: {
      //
    },
    name: {
      padding: 0,
      display: () => 'block'
    }
  }
});
