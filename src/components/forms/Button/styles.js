import {BUTTON_CLASSES} from './index';
export default theme => ({
  root: {
    padding: [0, 20],
    lineHeight: '3rem',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: theme.typography.primary,
    fontWeight: 'bold',
    fontSize: 20,
    '&:after': {
      content: '""',
      position: 'absolute',
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,.2)',
      borderRadius: '50%',
      width: 0,
      transition: 'all .5s',
      height: 0,
      marginBottom: '-50%',
      marginRight: '-50%',
    },
    '&.active:after': {
      width: '35rem',
      height: '35rem',
    }
  },
  juystifyButton: {
    display: (props => props.fullWidthButton ? 'block' : 'inline-block')
  },
  [BUTTON_CLASSES.PRIMARY_BUTTON]: {
    extend: 'root',
    backgroundColor: theme.palette.primary.base,
    color: theme.palette.text.base,
  },
  [BUTTON_CLASSES.OUTLINE_BUTTON]: {
    extend: 'root',
    backgroundColor: 'transparent',
    border: [2, 'solid', theme.palette.inverted.base],
    color: theme.palette.inverted.base
  },
  [BUTTON_CLASSES.OUTLINE_BUTTON_INVERSE]: {
    extend: 'root',
    backgroundColor: 'transparent',
    border: [2, 'solid', '#ffffff'],
    color: '#ffffff'
  }
});
