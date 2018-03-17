export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  header: {
    display: 'flex'
  },
  headerLeft: {
    width: 24,
    backgroundColor: theme.palette.primary.base
  },
  photoContainer: {},
  photo: {
    borderStyle: 'solid',
    borderColor: '#fff',
    borderWidth: '0 4px',
    width: 120,
    height: 120,
    backgroundSize: 'cover',
    backgroundColor: theme.palette.inverted.base,
    backgroundImage: props => 'url(' + props.trainer.photo + ')'
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: theme.palette.text.base,
    color: theme.palette.text.contrastText
  },
  profile: {
    padding: 12
  },
  name: {
    margin: 0,
    fontSize: 16,
    fontWeight: 'bold'
  },
  company: {
    fontStyle: 'italic',
    fontFamily: theme.typography.secondary
  },
  social: {
    padding: [0, 12, 12]
  },
  socialItem: {
    display: 'inline-block',
    lineHeight: 1,
    fontSize: 32,
    color: '#fff',
    '& + &': {
      marginLeft: 8
    }
  },
  description: {
    flex: 1,
    padding: 20
  },
  footer: {},
  footerTitle: {
    padding: [12, 24],
    fontWeight: 'bold',
    backgroundColor: '#eaeaea'
  },
  tech: {
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'space-around',
    flexFlow: 'row wrap',
    padding: 10,
    height: 60
  },
  logo: {
    display: 'inline-block',
    margin: 2,
    width: 40,
    height: 40,
    backgroundSize: 'cover'
  },

  // small +
  '@media screen and (min-width: 48em)': {
    main: {
      marginTop: 20
    },
    // The dimensions for each of the header elements are calculated to fit
    // the photo with negative margins so the other components have their spaces.
    headerLeft: {
      width: 45
    },
    photoContainer: {
      zIndex: 2,
      width: 90,
      height: 70
    },
    photo: {
      marginTop: -20,
      marginLeft: -20,
      width: 110,
      height: 110
    },
    info: {
      flexDirection: 'row'
    },
    profile: {
      flex: 1,
      paddingLeft: 20
    },
    social: {
      display: 'flex',
      padding: [0, 12]
    },
    socialItem: {
      marginTop: 'auto',
      marginBottom: 'auto'
    },
    description: {
      borderStyle: 'solid',
      borderColor: '#eaeaea',
      borderWidth: '0 1px',
      paddingTop: 50
    },
    tech: {
      borderStyle: 'solid',
      borderColor: '#eaeaea',
      borderWidth: '0 1px 1px'
    }
  }
});
