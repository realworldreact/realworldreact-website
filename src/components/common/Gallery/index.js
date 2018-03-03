import React from 'react';
import withStyles from 'react-jss';
import cx from 'classnames';

import gallery from '../../../data/gallery.json';
import styles from './styles';

const Gallery = props => {
  const { theme, sheet, classes, className, ...etc } = props;

  const getGalley = () => {
    const blockOptionsCount = 3;
    const blockItemsCount = 3;
    const galleryView = [];
    let blockItems = [];
    let itemClass = 1;
    gallery.map((item, index) => {
      blockItems.push(
        <div className="image">
          <img src={item.logo} />
        </div>
      );
      if (
        blockItems.length === blockItemsCount ||
        (blockItems.length < blockItemsCount && gallery.length === index + 1)
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
    return galleryView;
  };

  return (
    <div className={cx(classes.root, className)} {...etc}>
      {getGalley()}
    </div>
  );
};

export default withStyles(styles)(Gallery);
