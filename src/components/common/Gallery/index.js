import React from 'react';
import withStyles from 'react-jss';
import cx from 'classnames';

import gallery from '../../../data/gallery.json';
import styles from './styles';

class Gallery extends React.Component {
  constructor() {
    super(...arguments);
    this.state = { gallery: null };
  }

  render() {
    const { theme, sheet, classes, className, ...etc } = this.props;
    return (
      <div className={cx(classes.root, className)} {...etc}>
        {this.state.gallery}
      </div>
    );
  }

  componentWillMount() {
    this.getGalley();
  }

  getGalley = () => {
    const { classes } = this.props;
    const blockOptionsCount = 3;
    const blockItemsCount = 3;
    const galleryView = [];
    let blockItems = [];
    let itemClass = 1;
    gallery.map((item, index) => {
      blockItems.push(
        <div className="image">
          <img src={item.logo} alt="" />
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
    this.setState({ gallery: galleryView });
  };
}

export default withStyles(styles)(Gallery);
