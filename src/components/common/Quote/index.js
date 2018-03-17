import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import cx from 'classnames';

import styles from './styles';

const Quote = props => {
  const { theme, sheet, classes, className, children, author, ...etc } = props;
  return (
    <div className={cx(classes.root, className)} {...etc}>
      <div className={classes.quote}>{children}</div>
      <div className={classes.author}>{author}</div>
    </div>
  );
};

Quote.propTypes = {
  /**
   * Quote content.
   */
  children: PropTypes.any,

  /**
   * Author content.
   */
  author: PropTypes.any
};

Quote.defaultProps = {
  children: '',
  author: ''
};

export default withStyles(styles)(Quote);
