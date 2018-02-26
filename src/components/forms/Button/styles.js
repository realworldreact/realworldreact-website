export default theme => ({
  root: {
    display: props => (props.fullWidth ? 'block' : 'inline-block'),
    overflow: 'hidden',
    verticalAlign: 'middle'
  },
  ripples: {
    width: '100%',
    height: '100%'
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

    color: props => theme.palette[props.palette].contrastText,
    border: props =>
      '2px solid ' +
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
    display: props => (props.showArrow ? 'block' : 'none'),
    position: 'absolute',
    right: -2,
    top: -2,
    height: 'calc(100% + 4px)',
    width: 35,
    padding: 10,
    backgroundColor: theme.palette.primary.base,
    color: '#fff'
  }
});
