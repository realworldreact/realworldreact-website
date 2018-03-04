import React from 'react';
import PropTypes from 'prop-types';
import { navigateTo } from 'gatsby-link';
import withStyles from 'react-jss';
import Ripples from 'react-ripples';
import cx from 'classnames';

import styles from './styles';

class Button extends React.Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      theme,
      sheet,
      classes,
      className,
      children,
      size,
      palette,
      outline,
      textAlign,
      showArrow,
      buttonProps,
      href,
      onClick,
      ...etc
    } = this.props;
    return (
      <div className={cx(classes.root, className)} {...etc}>
        <Ripples className={classes.ripples}>
          <div className={classes.container} onClick={this.onClick}>
            <button
              {...buttonProps}
              className={cx(classes.button, buttonProps.className)}
            >
              {children}
            </button>
            <i className={cx(classes.arrow, 'mdi', 'mdi-chevron-right')} />
          </div>
        </Ripples>
      </div>
    );
  }

  onClick = ev => {
    ev.preventDefault();
    if (this.props.onClick) this.props.onClick(ev);
    if (this.props.href) navigateTo(this.props.href);
  };
}

Button.propTypes = {
  /**
   * Button height.
   */
  size: PropTypes.number,

  /**
   * Color palette for styles.
   */
  palette: PropTypes.oneOf([
    'primary',
    'secondary',
    'inverted',
    'text',
    'alert',
    'black'
  ]),

  /**
   * Button would be outlined.
   */
  outline: PropTypes.bool,

  /**
   * Show the arrow on right.
   */
  showArrow: PropTypes.bool,

  /**
   * Content text align.
   */
  textAlign: PropTypes.oneOf(['center', 'left', 'right']),

  /**
   * Options to pass to the button component.
   */
  buttonProps: PropTypes.object,

  /**
   * On button click, navigate to provided URL.
   */
  href: PropTypes.string,

  /**
   * Button content.
   */
  children: PropTypes.any
};

Button.defaultProps = {
  size: 36,
  palette: 'primary',
  textAlign: 'center',
  buttonProps: {}
};

export default withStyles(styles)(Button);
