export default theme => ({
  root: {
    display: 'block',
    cursor: 'pointer'
  },
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  main: {
    padding: 20,
    borderStyle: 'solid',
    borderWidth: '2px 2px 0',
    borderColor: theme.palette.primary.base,
    transition: 'border-color 200ms ease-out'
  },
  imageContainer: {
    padding: 20
  },
  image: {
    width: '100%',
    height: 60,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: props => `url(${props.image})`
  },
  title: {
    fontWeight: 'bold',
    color: theme.palette.text.base,
    '&:before': {
      content: '"_"',
      color: theme.palette.primary.base
    }
  },
  content: {
    marginTop: 10,
    color: theme.palette.text.base
  },
  button: {
    transition: 'opacity 200ms ease-out'
  },
  buttonInner: {
    padding: [8, 8, 8, 20]
  },

  // small +
  '@media screen and (min-width: 48em)': {
    content: {
      display: '-webkit-box',
      overflow: 'hidden',
      // 3 lines of text supported.
      height: 14 * 1.5 * 3,
      lineHeight: 1.5,
      fontSize: 14,
      '-webkit-line-clamp': 3,
      '-webkit-box-orient': 'vertical',
      textOverflow: 'ellipsis'
    }
  },

  // medium +
  '@media screen and (min-width: 64em)': {
    root: {
      '&:hover': {
        '& $main': {
          borderColor: theme.palette.primary.base
        },
        '& $button': {
          opacity: 1
        }
      }
    },
    main: {
      padding: 16,
      borderColor: 'transparent'
    },
    button: {
      opacity: 0
    },
    buttonInner: {
      padding: [8, 8, 8, 16],
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }
});
