export default theme => ({
  root: {
    display: 'flex',
    flex: '1',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  link: {
    fontWeight: 'bold',
    color: props => props.reversed ? '#fff' : theme.palette.inverted.base,
  },
  button: {
    minWidth: 160,
  },
  option: {
    marginLeft: 40,
    '&:first-child': {
      marginLeft: 0,
    },
  },
});
