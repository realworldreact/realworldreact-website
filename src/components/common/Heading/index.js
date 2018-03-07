import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import cx from 'classnames';

import styles from './styles';

const Heading = props => {
  const { theme, sheet, classes, className, title, subtitle, ...etc } = props;
  return (
    <div className={cx(classes.root, className)} {...etc}>
      <div className={classes.title}>{title}</div>
      <div className={classes.subtitle}>{subtitle}</div>
    </div>
  );
};

Heading.propTypes = {
  /**
   * Main text for the heading. It'll be in uppercase with lower opacity.
   */
  title: PropTypes.string.isRequired,

  /**
   * Text above the title. It'll be centered inside the title.
   */
  subtitle: PropTypes.string.isRequired
};

export default withStyles(styles)(Heading);
