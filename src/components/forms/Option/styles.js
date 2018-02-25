export default theme => ({
  root: {
    display: 'block',
    border: '1px solid #eaeaea',
    padding: [4, 8],
    textAlign: 'center',
    fontWeight: 'bold',
    color: theme.palette.inverted.base,
    userSelect: 'none',
    cursor: 'pointer',
    transition: 'all 200ms ease-out',

    '&:hover': {
      borderColor: theme.palette.primary.base,
      color: '#fff',
      backgroundColor: theme.palette.primary.base
    }
  }
});
