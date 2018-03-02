export default theme => ({
  root: {
    width: '100%'
  },
  quote: {
    fontStyle: 'italic',
    fontFamily: theme.typography.secondary,
    lineHeight: '32px',
    paddingTop: 15
  },
  author: {
    fontSize: 14,
    marginTop: 20,
    '& strong': {
      display: 'block'
    }
  }
});
