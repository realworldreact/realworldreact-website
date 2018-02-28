export default theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    verticalAlign: 'middle',
    cursor: 'pointer',

    '&:hover $arrow': {
      backgroundColor: theme.palette.primary.light
    }
  },
  ripples: {
    flex: '1',
    width: '100%',
    height: '100%'
  },
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    border: 0,
    padding: 0,
    alignItems: 'stretch',
    backgroundColor: 'transparent'
  },
  button: {
    display: 'inline-block',
    margin: 0,
    position: 'relative',
    padding: props => (props.showArrow ? '8px 35px 8px 10px' : '8px 10px'),
    width: '100%',
    height: '100%',
    textAlign: props => props.textAlign,
    verticalAlign: 'middle',
    outline: 'none',
    cursor: 'pointer',
    fontFamily: theme.typography.primary,
    fontWeight: 'bold',
    lineHeight: '1',
    userSelect: 'none',
    transition: 'all 200ms ease-out',
    borderStyle: 'solid',

    color: props => theme.palette[props.palette].contrastText,
    borderWidth: props => (props.showArrow ? '2px 0 2px 2px' : '2px'),
    borderColor: props =>
      theme.palette[props.palette][props.outline ? 'contrastText' : 'base'],
    backgroundColor: props =>
      props.outline ? 'transparent' : theme.palette[props.palette].base,

    '&:hover': {
      color: props => props.outline && theme.palette[props.palette].light,
      borderColor: props => theme.palette[props.palette].light,
      backgroundColor: props =>
        !props.outline && theme.palette[props.palette].light
    },

    '&::-moz-focus-inner': {
      border: 'none'
    }
  },
  arrow: {
    display: props => (props.showArrow ? 'flex' : 'none'),
    width: 35,
    backgroundColor: theme.palette.primary.base,
    color: '#fff',
    alignItems: 'center',
    cursor: 'pointer',
    justifyContent: 'center',
    transition: 'all 200ms ease-out'
  }
});
