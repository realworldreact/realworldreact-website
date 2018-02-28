export default theme => ({
  root: {
    padding: [20, 0, 0],
    position: 'relative',
    height: 150,
    overflow: 'hidden',
    bottom: props => (props.bottom ? '0' : '-1px'),
    transform: props => (props.bottom ? 'rotate(180deg)' : 'rotate(0deg)')
  },

  // CONTENT AREA
  content: {
    overflow: 'hidden',
    position: 'relative',
    height: '100%',
    width: '100%'
  },

  // SEMI SPHERE
  segment: {
    left: '-10%',
    width: '120%',
    height: 40,
    bottom: -15,
    backgroundColor: '#fff',
    position: 'absolute',
    borderRadius: '50%'
  },

  // CENTER LINE
  line: {
    width: 1,
    display: props => (props.bottom ? 'none' : 'block'),
    position: 'absolute',
    left: '50%',
    height: 120,
    backgroundColor: '#fff',
    bottom: -35,
    '&:after': {
      content: '""',
      height: 60,
      width: 1,
      backgroundColor: theme.palette.secondary.contrastText,
      position: 'absolute',
      bottom: 0,
      left: 0
    }
  },

  // DROPS CONTAINER
  dropsContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    '& .container': {
      height: 215
    }
  },
  drops: {
    width: 70,
    height: 70,
    marginTop: 20,
    '&:first-child': {
      float: 'left',
      transform: 'rotate(-3deg)'
    },
    '&:last-child': {
      float: 'right',
      transform: 'rotate(3deg)'
    }
  },
  dropImage: {
    height: 180,
    width: 'auto'
  },
  hideOnSmall: {
    display: 'none',
    position: 'relative'
  },
  dropLogo: {
    display: props => (props.bottom ? 'none' : 'block'),
    position: 'absolute',
    height: 60,
    width: 'auto',
    borderRadius: '50%'
  },
  logoA: {
    top: 40,
    right: 12
  },
  logoB: {
    top: 18,
    right: 15
  },

  // medium +
  '@media screen and (min-width: 64em)': {
    root: {
      padding: [60, 0, 0]
    },

    // SEMI SPHERE
    segment: {
      height: 140,
      bottom: -105
    }
  },

  // small +
  '@media screen and (min-width: 48em)': {
    root: {
      padding: [60, 0, 0],
      height: 215
    },

    // SEMI SPHERE
    segment: {
      height: 100,
      bottom: -55
    },

    // CENTER LINE
    line: {
      height: 160,
      '&:after': {
        height: 80
      }
    },

    // DROPS CONTAINER
    drops: {
      width: 180,
      height: 180,
      marginTop: 10
    },
    hideOnSmall: {
      display: 'inline-block'
    },
    bigDropImage: {
      width: 121,
      height: 180
    }
  }
});
