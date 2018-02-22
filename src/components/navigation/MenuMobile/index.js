import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import cx from 'classnames';

import styles from './styles';

const MenuMobile = props => {
  const { classes, className } = props;
  return (
    <div className={cx(classes.root, className)}>
      <i className={cx(classes.trigger, 'mdi mdi-menu')} />
    </div>
  );
};

MenuMobile.propTypes = {
  /**
   * Set theme with inverted colors.
   */
  inverted: PropTypes.bool,
};

export default withStyles(styles)(MenuMobile);
