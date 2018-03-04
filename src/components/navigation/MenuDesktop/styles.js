export default theme => ({
  root: {
    display: 'flex',
    flex: '1',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  link: {
    padding: [5, 10],
    outline: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
    userSelect: 'none',
    transition: 'color 200ms ease-out',
    color: props => (props.reversed ? '#fff' : theme.palette.inverted.base),
    '&:hover': {
      color: theme.palette.primary.light
    }
  },
  button: {
    minWidth: 160
  },
  option: {
    marginLeft: 20,
    '&:first-child': {
      marginLeft: 0
    }
  }
});
