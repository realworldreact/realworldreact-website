import imagePatternDots from '../../../assets/images/patterns/dots.png';

// The height of the page header.
export const MENU_MOBILE_HEADER_HEIGHT = 100;

// The time the menu takes to animate.
export const MENU_MOBILE_ANIM_TIME = 500;

// The class to add/remove to the body element on menu shown/hidden.
export const MENU_MOBILE_BODY_ACTIVE = 'menu-mobile-body-active';

export default theme => ({
  '@global': {
    ['.' + MENU_MOBILE_BODY_ACTIVE]: {
      overflow: 'hidden'
    }
  },
  root: {
    display: 'flex',
    flex: '1',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  trigger: {
    position: 'relative',
    padding: 2,
    width: 36,
    height: 36,
    cursor: 'pointer'
  },
  triggerLine: {
    position: 'relative',
    height: 3,
    margin: [6, 0],
    display: 'block',
    top: 0,
    transition: `all ${MENU_MOBILE_ANIM_TIME}ms ease-out`,
    backgroundColor: props =>
      props.reversed ? '#fff' : theme.palette.inverted.base,

    '$active &': {
      '&:first-child': {
        transform: 'rotate(45deg)',
        top: 9
      },
      '&:last-child': {
        transform: 'rotate(-45deg)',
        top: -9
      },
      '&:nth-child(2)': {
        opacity: 0
      }
    }
  },
  // By default, the menu is hidden with height 0. On shown, it is fixated
  // on the page with the header top height.
  menuContainer: {
    zIndex: 1000,
    position: 'fixed',
    top: MENU_MOBILE_HEADER_HEIGHT,
    left: 0,
    bottom: 'auto',
    right: 0,
    overflow: 'hidden',
    '$active &': {
      bottom: 0
    }
  },
  menu: {
    overflowY: 'auto',
    padding: 0,
    width: '100%',
    height: 0,
    opacity: 0,
    textAlign: 'left',
    backgroundColor: props =>
      props.reversed ? theme.palette.inverted.base : '#fff',
    backgroundImage: props => props.reversed && `url(${imagePatternDots})`,
    transition: `all ${MENU_MOBILE_ANIM_TIME}ms ease-out`,

    '$active &': {
      padding: 20,
      height: '100%',
      opacity: 1
    }
  },
  navTitle: {
    margin: [20, 0],
    fontSize: 20,
    fontWeight: 'bold',
    color: props => (props.reversed ? '#fff' : theme.palette.inverted.base)
  },
  navItem: {
    marginBottom: 10
  },

  // When menu is being shown.
  active: {}
});
