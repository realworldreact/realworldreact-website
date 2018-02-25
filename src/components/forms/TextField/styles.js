export default theme => {
  const getColor = props =>
    props.reversed ? '#fff' : theme.palette.inverted.base;
  return {
    root: {
      display: 'block'
    },
    field: {
      display: 'block',
      margin: 0,
      padding: [4, 12],
      width: '100%',
      outline: 'none',
      background: 'transparent',
      lineHeight: '1',
      fontSize: 16,
      fontWeight: 'bold',
      resize: 'none',
      transition: 'border-color 200ms ease-out',

      minHeight: props => (props.isTextarea ? 16 * 3 : 'auto'),
      border: props => '2px solid ' + getColor(props),
      color: props => getColor(props),

      '&:focus': {
        borderColor: props => theme.palette[props.palette].base
      },

      // Remove browser/os appareance
      '-webkit-appearance': 'none',
      '-moz-appearance': 'none',
      appearance: 'none',

      // Placeholder color
      '&::-webkit-input-placeholder': {
        opacity: 1,
        color: props => getColor(props)
      },
      '&::-moz-placeholder': {
        opacity: 1,
        color: props => getColor(props)
      },
      '&:-ms-input-placeholder': {
        opacity: 1,
        color: props => getColor(props)
      },
      '&:-moz-placeholder': {
        opacity: 1,
        color: props => getColor(props)
      },

      // Autofill background color
      '&:-webkit-autofill': {
        '-webkit-box-shadow': '0 0 0 rgba(0, 0, 0, 0.001)'
      },

      // Input number arrows
      '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0
      },
      '&[type="number"]': {
        '-moz-appearance': 'textfield'
      }
    },
    errorText: {
      padding: [4, 0, 0, 14],
      lineHeight: 1.2,
      fontFamily: theme.typography.secondary,
      fontStyle: 'italic',
      color: theme.palette.alert.base
    }
  };
};
