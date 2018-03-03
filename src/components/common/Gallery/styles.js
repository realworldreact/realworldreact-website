export default theme => ({
  root: {
    width: '100%',
  },
  imageContainer: {
    width: '50%',
    float: 'left',
    fontSize: 0,
    '& .image': {
      width: '33.2%',
      paddingTop: '33.2%',
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'hidden',
      float: 'left',
      '& img': {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        transition: 'all 500ms ease-out',
        padding: 1,
        overflow: 'hidden',
        '&:hover': {
          opacity: 0.5,
          transform: 'scale(1.2)'
        }
      }
    },
    '&.block-1': {
      '& .image': {
        '&:first-child': {
          width: '66.4%',
          paddingTop: '66.4%'
        }
      }
    },
    '&.block-2, &.block-3': {
      '& .image': {
        '&:nth-child(2)': {
          width: '66.4%',
          paddingTop: '66.4%',
          float: 'right',
          '& img': {
            paddingLeft: 0,
            paddingRight: 2
          }
        }
      }
    },
    '& .clearfix': {
      clear: 'both'
    }
  },

  // small +
  '@media screen and (min-width: 48em)': {
    imageContainer: {
      width: '100%',
      '&.block-3': {
        '& .image': {
          '&:nth-child(2)': {
            width: '33.2%',
            paddingTop: '33.2%',
            float: 'left',
            '& img': {
              paddingLeft: 1,
              paddingRight: 1
            }
          }
        }
      },
    }
  }
});
