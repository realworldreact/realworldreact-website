export default theme => ({
  root: {
    overflow: 'hidden',
    verticalAlign: 'middle',
    cursor: 'pointer',
    height: props => props.size,

    '&:hover $arrow': {
      backgroundColor: theme.palette.primary.light
    }
  },
  ripples: {
    width: '100%',
    height: '100%'
  },
  container: {
    overflow: 'hidden',
    width: '100%',
    height: '100%'
  },
  button: {
    float: 'left',
    position: 'relative',
    display: 'inline-block',
    margin: 0,
    width: props => (props.showArrow ? `calc(100% - ${props.size}px)` : '100%'),
    height: '100%',
    verticalAlign: 'middle',
    outline: 'none',
    cursor: 'pointer',
    fontFamily: theme.typography.primary,
    fontWeight: 'bold',
    lineHeight: '1',
    userSelect: 'none',
    transition: 'all 200ms ease-out',
    borderStyle: 'solid',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',

    padding: props => `0 ${props.size / 3}px`,
    textAlign: props => props.textAlign,

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
    float: 'left',
    backgroundColor: theme.palette.primary.base,
    color: '#fff',
    alignItems: 'center',
    cursor: 'pointer',
    justifyContent: 'center',
    transition: 'all 200ms ease-out',

    display: props => (props.showArrow ? 'flex' : 'none'),
    width: props => props.size,
    height: props => props.size
  }
});
