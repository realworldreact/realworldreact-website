import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import cx from 'classnames';

import styles from './styles';

const Heading = props => {
  const {
    theme,
    sheet,
    classes,
    className,
    title,
    titleClassName,
    subtitle,
    subtitleClassName,
    ...etc
  } = props;
  return (
    <div className={cx(classes.root, className)} {...etc}>
      <div className={cx(classes.title, titleClassName)}>{title}</div>
      <div className={cx(classes.subtitle, subtitleClassName)}>{subtitle}</div>
    </div>
  );
};

Heading.propTypes = {
  /**
   * Main text for the heading. It'll be in uppercase with lower opacity.
   */
  title: PropTypes.string.isRequired,
  titleClassName: PropTypes.string,

  /**
   * Text above the title. It'll be centered inside the title.
   */
  subtitle: PropTypes.string.isRequired,
  subtitleClassName: PropTypes.string
};

export default withStyles(styles)(Heading);
