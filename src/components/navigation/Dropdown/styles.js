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
    marginTop: 10,
    padding: 6,
    minWidth: 180,
    boxShadow: '0 0 6px #eaeaea',
    backgroundColor: '#fff',
    animation: 'dropdown-show 200ms ease-out'
  },
  item: {
    display: 'block',
    padding: [4, 8],
    textAlign: 'center',
    fontWeight: 'bold',
    color: theme.palette.inverted.base,
    border: '1px solid #eaeaea',
    transition: 'all 200ms ease-out',

    '& + &': {
      marginTop: 10
    },
    '&:hover': {
      borderColor: theme.palette.primary.base,
      color: '#fff',
      backgroundColor: theme.palette.primary.base
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
