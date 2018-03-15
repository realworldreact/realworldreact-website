export default theme => ({
  root: {
    color: '#fff'
  },
  heading: {
    maxWidth: 550,
    margin: 'auto',
    textAlign: 'center'
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
  }
});
