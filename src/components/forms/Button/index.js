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
      href,
      palette,
      outline,
      showArrow,
      buttonProps,
      textAlign,
      onClick,
      ...etc
    } = this.props;
    return (
      <div className={cx(classes.root, className)} {...etc}>
        <Ripples className={classes.ripples}>
          <button className={classes.container} onClick={this.onClick}>
            <div
              {...buttonProps}
              className={cx(classes.button, buttonProps.className)}
            >
              {children}
            </div>
            <i className={cx(classes.arrow, 'mdi', 'mdi-chevron-right')} />
          </button>
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
   * On button click, navigate to provided URL.
   */
  href: PropTypes.string,

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
   * Button content.
   */
  children: PropTypes.any.isRequired
};

Button.defaultProps = {
  palette: 'primary',
  buttonProps: {},
  textAlign: 'center'
};

export default withStyles(styles)(Button);
