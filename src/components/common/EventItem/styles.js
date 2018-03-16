const getMap = (props, size) => {
  const dimensions = size === 'small' ? '200x400' : '300x300';
  return (
    'https://maps.googleapis.com/maps/api/staticmap?center=' +
    props.event.mapLat +
    ',' +
    props.event.mapLng +
    '&zoom=' +
    props.event.mapZoom +
    '&size=' +
    dimensions +
    '&markers=color%3Ablack%7Csize%3Alarge%7C' +
    props.event.mapLat +
    '%2C' +
    props.event.mapLng +
    '&key=' +
    props.googleAPIKey
  );
};

export default theme => ({
  root: {
    //
  },
  main: {
    //
  },
  content: {
    padding: [0, 20, 20]
  },
  name: {
    lineHeight: 1.3,
    fontSize: 18,
    fontWeight: 'bold'
  },
  talksTitle: {
    margin: [20, 0, 10],
    fontWeight: 'bold'
  },
  talks: {
    fontStyle: 'italic',
    fontFamily: theme.typography.secondary
  },
  talksItem: {
    lineHeight: 1.3,
    '&:not(:first-of-type)': {
      marginTop: 5
    }
  },
  info: {
    display: 'flex',
    borderTop: '1px solid ' + theme.palette.primary.base
  },
  map: {
    width: 80,
    cursor: 'pointer',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: theme.palette.inverted.base,
    backgroundImage: props => `url(${getMap(props, 'small')})`
  },
  details: {
    flex: 1,
    paddingBottom: 20,
    backgroundColor: theme.palette.primary.base,
    color: theme.palette.primary.contrastText
  },
  detailsItem: {
    display: 'flex',
    padding: [20, 20, 0]
  },
  detailsItemIcon: {
    margin: 'auto',
    fontSize: 28
  },
  detailsItemText: {
    margin: ['auto', 0, 'auto', 10],
    flex: 1,
    fontSize: 14
  },
  button: {
    //
  },

  // small +
  '@media screen and (min-width: 48em)': {
    main: {
      display: 'flex',
      flexDirection: 'row-reverse'
    },
    content: {
      flex: 1,
      borderStyle: 'solid',
      borderWidth: '1px 1px 0 0',
      borderColor: theme.palette.primary.base,
      padding: 20
    },
    info: {
      flexDirection: 'column',
      border: 'none',
      width: 250
    },
    map: {
      border: '1px solid ' + theme.palette.primary.base,
      width: 250,
      height: 200,
      backgroundImage: props => `url(${getMap(props, 'large')})`
    },
    details: {
      padding: [10, 0, 20]
    },
    detailsItem: {
      padding: [10, 10, 0]
    },
    detailsItemText: {
      fontSize: 12
    }
  }
});
