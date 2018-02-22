import imagePatternDots from '../../../assets/images/patterns/dots.png';

export default theme => ({
  root: {
    display: 'flex',
    flex: '1',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  trigger: {
    cursor: 'pointer',
    width: 36,
    height: 36,
    position: 'relative',
    padding: 2,
    '& .line': {
      position: 'relative',
      height: 3,
      margin: [6, 0],
      display: 'block',
      top: 0,
      transition: 'all .5s',
      background: props => props.inverted ? '#fff' : theme.palette.inverted.base,
    },
    '&.active': {
      '& .line:first-child': {
        transform: 'rotate(45deg)',
        top: 9
      },
      '& .line:last-child': {
        transform: 'rotate(-45deg)',
        top: -9
      },
      '& .line:nth-child(2)': {
        opacity: 0
      }
    }
  },
  menuItemsContainer: {
    position: 'fixed',
    width: '100%',
    top: '6rem',
    height: 0,
    left: 0,
    zIndex: 0,
    overflow: 'hidden',
    transition: 'all .5s',
    background: theme.palette.inverted.base,
    backgroundImage: `url(${imagePatternDots})`,
    '&.active': {
      height: 'calc(100% - 6rem)',
    },
    '& .navItems': {
      textAlign: 'left',
      height: '100%',
      overflow: 'auto',
      padding: 20,
    }
  },
  navTitle: {
    color: '#ffffff',
    fontFamily: theme.typography.primary,
    fontWeight: 500,
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20
  },
  navItem: {
    marginBottom: 10
  }
});
