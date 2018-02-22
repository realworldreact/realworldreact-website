export default theme => ({
  root: {
    display: 'flex',
    flex: '1',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  trigger: {
    padding: [0, 10],
    fontSize: 36,
    cursor: 'pointer',
    color: props => props.inverted ? '#fff' : theme.palette.inverted.base,
  },
});
