import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import withStyles from 'react-jss';
import cx from 'classnames';

import styles from './styles';

const MenuDesktop = props => {
  const { classes, className } = props;
  return (
    <div className={cx(classes.root, className)}>
      <Link className={classes.link} to='/'>Home</Link>
    </div>
  );
};

MenuDesktop.propTypes = {
  /**
   * Set theme with inverted colors.
   */
  inverted: PropTypes.bool,
};

export default withStyles(styles)(MenuDesktop);
