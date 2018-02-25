export default theme => ({
  root: {
    display: 'flex',
    width: '100%',
    flexDirection: props => (props.stackOnMobile ? 'column' : 'row')
  },
  imageContainer: {
    flex: '0 0 auto',
    textAlign: 'center',
    marginRight: props => (props.stackOnMobile ? 0 : 40),
    marginBottom: props => (props.stackOnMobile ? 20 : 'auto')
  },
  image: {
    display: 'inline-block',
    width: 50
  },
  subtitle: {
    marginTop: 10,
    fontFamily: theme.typography.secondary,
    fontStyle: 'italic',
    fontSize: '120%'
  },
  text: {
    textAlign: 'left'
  },

  // small +
  '@media screen and (min-width: 30em)': {
    root: {
      flexDirection: () => 'row'
    },
    imageContainer: {
      marginRight: () => 40,
      marginBottom: () => 'auto'
    }
  }
});
