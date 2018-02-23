export default (theme) => ({
  root: {
    display: props => props.fullWidth ? 'block' : 'inline-block',
    overflow: 'hidden',
    verticalAlign: 'middle',
  },
  ripples: {
    width: '100%',
    height: '100%',
  },
  button: {
    display: 'inline-block',
    margin: 0,
    padding: [8, 20],
    width: '100%',
    height: '100%',
    textAlign: 'center',
    verticalAlign: 'middle',
    outline: 'none',
    cursor: 'pointer',
    fontFamily: theme.typography.primary,
    fontWeight: 'bold',
    lineHeight: '1',
    userSelect: 'none',
    transition: 'all 200ms ease-out',

    color: props => theme.palette[props.palette].contrastText,
    border: props => '2px solid '
      + theme.palette[props.palette][props.outline ? 'contrastText' : 'base'],
    backgroundColor: props => props.outline
      ? 'transparent'
      : theme.palette[props.palette].base,

    '&:hover': {
      color: props => props.outline && theme.palette[props.palette].light,
      borderColor: props => theme.palette[props.palette].light,
      backgroundColor: props => !props.outline && theme.palette[props.palette].light,
    },

    '&::-moz-focus-inner': {
      border: 'none',
    },
  },
});
