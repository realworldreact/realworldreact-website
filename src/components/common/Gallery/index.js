import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import cx from 'classnames';

import styles from './styles';

const Gallery = props => {
  const { theme, sheet, classes, className, images, ...etc } = props;

  // TODO: Functionality needs to be explained.

  const blockOptionsCount = 3;
  const blockItemsCount = 3;
  const galleryView = [];

  let blockItems = [];
  let itemClass = 1;

  images.forEach((item, index) => {
    blockItems.push(
      <div className={classes.imageWrapper}>
        <div
          className={classes.image}
          style={{ backgroundImage: `url(${item.path})` }}
        />
      </div>
    );
    if (
      blockItems.length === blockItemsCount ||
      (blockItems.length < blockItemsCount && images.length === index + 1)
    ) {
      blockItems.push(<div className="clearfix" />);
      const blockContainer = React.createElement('div', {
        key: index,
        className: cx(classes.imageContainer, 'block-' + itemClass),
        children: [...blockItems]
      });
      blockItems = [];
      galleryView.push(blockContainer);
      itemClass = itemClass < blockOptionsCount ? itemClass + 1 : 1;
    }
  });

  return (
    <div className={cx(classes.root, className)} {...etc}>
      {galleryView}
    </div>
  );
};

Gallery.propTypes = {
  /**
   * List of images.
   */
  images: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string.isRequired
    })
  )
};

export default withStyles(styles)(Gallery);
