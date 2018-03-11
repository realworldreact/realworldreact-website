export default theme => ({
  root: {
    display: 'flex',
    width: '100%',
    flexDirection: props => (props.stackOnMobile ? 'column' : 'row')
  },
  resources: {
    flex: '0 0 auto',
    textAlign: props => (props.stackOnMobile ? 'center' : 'left'),
    marginBottom: props => (props.stackOnMobile ? 20 : 'auto'),
    width: props => (props.stackOnMobile ? '100%' : 90)
  },
  imageContainer: {},
  image: {
    display: 'inline-block',
    width: 50
  },
  subtitle: {
    marginTop: 10,
    paddingRight: 5,
    fontFamily: theme.typography.secondary,
    fontStyle: 'italic'
  },
  text: {},

  // small +
  '@media screen and (min-width: 30em)': {
    root: {
      flexDirection: () => 'row'
    },
    resources: {
      textAlign: () => 'left',
      marginBottom: () => 'auto',
      width: () => 90
    },
    subtitle: {
      wordBreak: 'break-all'
    }
  }
});
