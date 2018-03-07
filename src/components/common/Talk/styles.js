export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 20
  },
  main: {
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    height: 'auto',
    position: 'relative',
    borderLeft: [1, 'solid', 'transparent'],
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 37,
      backgroundColor: theme.palette.primary.base,
      width: 1,
      height: '100%',
      zIndex: -1
    }
  },
  image: {
    backgroundSize: 'cover',
    width: 75,
    height: 75
  },
  description: {
    flex: 1,
    padding: 20,
    fontSize: 14,
    lineHeight: '18px',
    '& h4': {
      fontSize: 16,
      color: theme.palette.text.light,
      marginTop: 0
    },
    '& p': {
      width: '100%',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      maxHeight: 90,
      display: '-webkit-box',
      '-webkit-line-clamp': 5,
      '-webkit-box-orient': 'vertical',
      '& span': {
        color: theme.palette.primary.base
      }
    }
  },

  // small +
  '@media screen and (min-width: 48em)': {
    root: {
      '&:hover': {
        '& .cta': {
          opacity: 1
        },
        '& .main-transition': {
          borderLeft: [1, 'solid', theme.palette.primary.base],
          boxShadow: 'none',
          '&:after': {
            width: '100%',
            transition: 'width 500ms ease-out',
            transitionDelay: '0ms'
          },
          '&:before': {
            height: '100%',
            transition: 'height 500ms ease-out',
            transitionDelay: '500ms'
          }
        }
      },
      '& .cta': {
        transition: 'opacity 500ms ease',
        opacity: 0
      }
    },
    main: {
      boxShadow: { x: 5, y: 8, blur: 20, spread: 3, color: 'rgba(0,0,0,.06)' },
      height: 220,
      '&:after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: -1,
        backgroundColor: theme.palette.primary.base,
        width: 0,
        height: 1,
        transition: 'width 500ms ease-in',
        transitionDelay: '500ms'
      },
      '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 1,
        left: 'auto',
        backgroundColor: theme.palette.primary.base,
        width: 1,
        height: 0,
        transition: 'height 500ms ease-in',
        transitionDelay: '0ms'
      }
    },
    image: {
      width: 220,
      height: 'auto'
    },
    description: {
      border: '1px solid #EAEAEA',
      borderLeftColor: 'transparent'
    }
  }
});
