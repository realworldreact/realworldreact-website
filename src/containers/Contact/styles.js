export default theme => ({
  root: {
    marginBottom: 25,
    color: '#fff'
  },
  heading: {
    maxWidth: 550,
    margin: 'auto',
    textAlign: 'center',
    '& h2': {
      fontSize: 20
    }
  },
  required: {
    fontFamily: theme.typography.secondary,
    fontStyle: 'italic',
    marginBottom: 40
  },
  input: {
    marginBottom: 15
  },
  textArea: {
    borderBottomWidth: 0,
    minHeight: 180,
    paddingTop: 10
  },

  // small +
  '@media screen and (min-width: 48em)': {
    heading: {
      '& h2': {
        fontSize: 32
      }
    }
  }
});
