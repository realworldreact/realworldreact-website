export default theme => ({
  root: {
    padding: 20,
    backgroundColor: theme.colorPrimary,
  },
  content: {
    color: '#ffffff',
    '& h1': {
      margin: 0,
    },
  },
});
