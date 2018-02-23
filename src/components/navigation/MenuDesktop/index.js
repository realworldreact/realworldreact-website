import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import withStyles from 'react-jss';
import cx from 'classnames';

import Button from '../../forms/Button';
import styles from './styles';

const MenuDesktop = props => {
  const { theme, sheet, classes, className, reversed, ...etc } = props;
  return (
    <div className={cx(classes.root, className)} {...etc}>
      <Link className={cx(classes.option, classes.link)} to='/'>Home</Link>
      <Link className={cx(classes.option, classes.link)} to='/'>Services</Link>
      <Link className={cx(classes.option, classes.link)} to='/'>Resources</Link>
      <Button
        className={cx(classes.option, classes.button)}
        href='/contact'
        outline={reversed}
      >
        Let's Talk
      </Button>
    </div>
  );
};

MenuDesktop.propTypes = {
  /**
   * Set theme with reversed colors.
   */
  reversed: PropTypes.bool,
};

export default withStyles(styles)(MenuDesktop);
