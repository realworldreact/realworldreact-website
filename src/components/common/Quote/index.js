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

// TODO: Remove the default props when there is content defined by
// the components consuming this one.
Quote.defaultProps = {
  children: `
    “Jobsity full of talented, enthusiastic and passionate employees who
    truly care about the product they are delivering.”
  `,
  author: (
    <div>
      <a href="https://jobsity.com" target="jobsity">
        Jobsity
      </a>{' '}
      is the remote dev partner of Real World React
    </div>
  )
};

export default withStyles(styles)(Quote);
