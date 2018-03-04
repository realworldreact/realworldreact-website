export default () => ({
  root: {},
  teamHeader: {
    display: 'flex',
    marginBottom: 20
  },
  teamHeading: {
    display: 'inline-block',
    margin: [0, 'auto'],
    maxWidth: 320
  },
  teamMobile: {},
  teamDesktop: {
    display: 'none'
  },
  teamItem: {
    display: 'flex',
    '& + &': {
      marginTop: 10
    }
  },
  teamItemImage: {
    flex: '0 0 auto',
    height: 44,
    width: 44,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  teamItemBtn: {
    flex: 1
  },

  // small +
  '@media screen and (min-width: 48em)': {
    teamHeading: {
      margin: '0 0 0 auto'
    },
    teamMobile: {
      display: 'none'
    },
    teamDesktop: {
      display: 'block'
    }
  }
});
