import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import cx from 'classnames';

import styles from './styles';

const ImageText = props => {
  const {
    theme,
    sheet,
    classes,
    className,
    children,
    image,
    imageProps,
    subtitle,
    stackOnMobile,
    ...etc
  } = props;
  return (
    <div className={cx(classes.root, className)} {...etc}>
      <div className={classes.imageContainer}>
        <img
          src={image}
          {...imageProps}
          className={cx(classes.image, imageProps.className)}
        />
        {!!subtitle && <div className={classes.subtitle}>{subtitle}</div>}
      </div>
      <div className={classes.text}>{children}</div>
    </div>
  );
};

ImageText.propTypes = {
  /**
   * Image path.
   */
  image: PropTypes.string.isRequired,

  /**
   * Props to pass down to the image element.
   */
  imageProps: PropTypes.object,

  /**
   * Image subtitle.
   */
  subtitle: PropTypes.string,

  /**
   * Stack the image above the content in mobile screens.
   */
  stackOnMobile: PropTypes.bool
};

ImageText.defaultProps = {
  imageProps: {}
};

export default withStyles(styles)(ImageText);
