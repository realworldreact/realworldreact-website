export default theme => ({
  root: {
    display: 'flex',
    flex: '1',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  link: {
    fontWeight: 'bold',
    color: props => props.inverted ? '#fff' : theme.palette.inverted.base,
  },
});
