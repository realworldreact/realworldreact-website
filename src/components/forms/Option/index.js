import React from 'react';
import PropTypes from 'prop-types';
import { navigateTo } from 'gatsby-link';
import withStyles from 'react-jss';
import cx from 'classnames';

import styles from './styles';

class Option extends React.Component {
  render() {
    const {
      theme,
      sheet,
      classes,
      className,
      children,
      to,
      ...etc
    } = this.props;
    const node = to ? 'a' : 'div';
    const cls = cx(classes.root, className);
    return React.createElement(
      node,
      {
        className: cls,
        href: to ? to : null,
        ...etc,
        onClick: this.onLink
      },
      children
    );
  }

  onLink = ev => {
    ev.preventDefault();
    const { to, onClick } = this.props;

    // Call passed onClick event handler since we are overwritting it
    // in the root element.
    if (onClick) {
      onClick(ev);
    }

    if (/^https?\:\/\//.test(to)) {
      window.open(to, '_blank');
    } else {
      navigateTo(to);
    }
  };
}

Option.propTypes = {
  /**
   * If the option is a link, add the tag link.
   */
  to: PropTypes.string
};

export default withStyles(styles)(Option);
