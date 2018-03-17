export default () => ({
  root: {
    overflow: 'hidden',
    width: '100%'
  },
  imageContainer: {
    width: '50%',
    float: 'left',
    fontSize: 0,
    '& $imageWrapper': {
      width: '33.2%',
      paddingTop: '33.2%'
    },

    // TODO: Use JSS classes instead of global classes.
    '&.block-1': {
      '& $imageWrapper': {
        '&:first-child': {
          width: '66.4%',
          paddingTop: '66.4%'
        }
      }
    },
    '&.block-2, &.block-3': {
      '& $imageWrapper': {
        '&:nth-child(2)': {
          width: '66.4%',
          paddingTop: '66.4%',
          float: 'right'
        }
      }
    },
    '& .clearfix': {
      clear: 'both'
    }
  },
  imageWrapper: {
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
    float: 'left'
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'hidden',
    border: '1px solid transparent',
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    transition: 'all 200ms ease-out',
    '&:hover': {
      opacity: 0.9,
      transform: 'scale(1.1)'
    }
  },

  // small +
  '@media screen and (min-width: 48em)': {
    imageContainer: {
      width: '100%',
      '&.block-3': {
        '& $imageWrapper': {
          '&:nth-child(2)': {
            width: '33.2%',
            paddingTop: '33.2%',
            float: 'left'
          }
        }
      }
    },
    imageWrapper: {}
  }
});
