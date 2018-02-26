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
      fullWidth,
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
          <button
            {...buttonProps}
            onClick={this.onClick}
            className={cx(classes.button, buttonProps.className)}
          >
            {children}
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
   * Button should take full width.
   */
  fullWidth: PropTypes.bool,

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
   * Show the arrow on right
   */
  showArrow: PropTypes.bool,

  /**
   * Button would be outlined.
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
