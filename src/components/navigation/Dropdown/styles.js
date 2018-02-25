export default theme => ({
  '@global': {
    '.dropdown': {
      display: 'inline-block'
    },
    '.dropdown__content': {
      display: 'none',
      position: 'absolute'
    },
    '.dropdown--active .dropdown__content': {
      display: 'block'
    }
  },
  root: {
    userSelect: 'none'
  },
  content: {
    zIndex: 100,
    marginTop: 10,
    padding: 6,
    minWidth: 180,
    boxShadow: '0 0 6px #eaeaea',
    backgroundColor: '#fff',
    animation: 'dropdown-show 200ms ease-out'
  },
  item: {
    '& + &': {
      marginTop: 10
    }
  },

  '@keyframes dropdown-show': {
    '0%': {
      marginTop: -10,
      opacity: 0
    },
    '100%': {
      marginTop: 10,
      opacity: 1
    }
  }
});
