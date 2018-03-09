export default theme => ({
  root: {
    marginBottom: 25,
    color: props => (props.reversed ? '#fff' : theme.palette.inverted.base)
  },
  title: {
    fontSize: 16,
    marginBottom: 15
  },
  description: {
    fontSize: 14,
    marginBottom: 15
  },
  button: {
    marginTop: 15
  }
});
