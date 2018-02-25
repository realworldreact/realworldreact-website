import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import withStyles from 'react-jss';
import cx from 'classnames';

import styles from './styles';

const Option = props => {
  const { theme, sheet, classes, className, children, to, ...etc } = props;
  const node = to ? Link : 'div';
  const cls = cx(classes.root, className);
  return React.createElement(
    node,
    {
      className: cls,
      to: to ? to : null,
      ...etc
    },
    children
  );
};

Option.propTypes = {
  /**
   * If the option is a link, add the tag link.
   */
  to: PropTypes.string
};

export default withStyles(styles)(Option);
