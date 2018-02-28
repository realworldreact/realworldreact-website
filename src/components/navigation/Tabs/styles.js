export default theme => ({
  root: {
    width: '100%'
  },
  tabs: {
    //
  },
  tabsContent: {
    borderStyle: 'solid',
    borderColor: theme.palette.primary.base,
    borderWidth: '0 2px'
  },
  tabsItem: {
    //
  },
  tabsItemContent: {
    padding: 20
  },

  // Options
  options: {
    //
  },
  optionContainer: {
    position: 'relative',
    padding: [0, 10, 10],
    borderStyle: 'solid',
    borderColor: theme.palette.primary.base,
    borderWidth: '0 2px'
  },
  optionContainerInactive: {
    border: 'none'
  },
  option: {
    transition: 'background-color 200ms ease-out'
  },
  optionLink: {
    //
  },
  optionActive: {
    backgroundColor: theme.palette.primary.base,
    '&:before, &:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      width: 12,
      height: 18,
      backgroundColor: '#fff',
      borderBottom: '2px solid ' + theme.palette.primary.base
    },
    '&:before': {
      left: -2
    },
    '&:after': {
      right: -2
    },
    '& $optionLink': {
      borderColor: 'transparent',
      backgroundColor: 'transparent',
      color: '#fff'
    }
  },

  // Buttons
  buttons: {
    //
  },
  buttonsItem: {
    width: '100%',
    padding: [0, 10]
  },
  buttonsEnter: {
    position: 'relative',
    '& $buttonsItem': {
      '&:before, &:after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        bottom: 0,
        width: 12,
        height: 18,
        backgroundColor: '#fff',
        borderTop: '2px solid ' + theme.palette.primary.base
      },
      '&:before': {
        left: -2
      },
      '&:after': {
        right: -2
      }
    }
  },
  buttonsNext: {
    position: 'relative',
    marginTop: 10,
    '& $buttonsItem': {
      '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: -10,
        left: -2,
        right: -2,
        height: '130%',
        backgroundColor: '#fff'
      }
    }
  },

  // Utils
  onMedium: {
    display: 'none'
  },
  onSmall: {
    //
  },

  // small +
  '@media screen and (min-width: 48em)': {
    onMedium: {
      display: 'block'
    },
    onSmall: {
      display: 'none'
    },
    tabs: {
      padding: 0,
      backgroundColor: '#fff',
      borderRight: '2px solid ' + theme.palette.primary.base
    },
    tabsContent: {
      border: 'none'
    },
    tabsItemContent: {
      padding: 40
    },

    // Options
    options: {
      marginLeft: -2,
      border: 'none',
      paddingLeft: 0
    },
    optionContainer: {
      border: 'none',
      padding: [0, 0, 10]
    },
    optionContainerInactive: {
      backgroundColor: '#fff'
    },
    option: {
      padding: [0, 20]
    },
    optionActive: {
      '&:before, &:after': {
        display: 'none'
      }
    },

    // Buttons
    buttons: {
      padding: 0
    },
    buttonsItem: {
      padding: 0
    }
  }
});
