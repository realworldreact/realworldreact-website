export default () => ({
  root: {
    display: 'block',
    position: 'relative'
  },
  title: {
    overflow: 'hidden',
    width: '100%',
    height: 96,
    fontSize: 96,
    lineHeight: 1,
    fontWeight: 'bold',
    textAlign: 'justify',
    textTransform: 'uppercase',
    opacity: 0.1,
    '&:after': {
      content: '""',
      display: 'inline-block',
      width: '100%'
    }
  },
  subtitle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: '50%',
    transform: 'translate(0, -50%)',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14
  }
});
