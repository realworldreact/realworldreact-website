import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { navigateTo } from 'gatsby-link';
import cx from 'classnames';

import Button from '../../forms/Button';
import styles from './styles';

class Resource extends React.Component {
  render() {
    const {
      theme,
      sheet,
      classes,
      className,
      image,
      title,
      content,
      enterText,
      href,
      ...etc
    } = this.props;
    return (
      <div className={cx(classes.root, className)} {...etc}>
        <a className={classes.container} onClick={this.onClick}>
          <div className={classes.main}>
            <div className={classes.imageContainer}>
              <div className={classes.image} />
            </div>
            <div className={classes.title}>{title}</div>
            <div className={classes.content}>{content}</div>
          </div>
          <Button
            className={classes.button}
            showArrow
            palette="text"
            textAlign="left"
            buttonProps={{ className: classes.buttonInner }}
          >
            {enterText}
          </Button>
        </a>
      </div>
    );
  }

  onClick = event => {
    event.preventDefault();
    const { href } = this.props;
    if (/^https?\:\/\//.test(href)) {
      window.open(href, '_blank');
    } else {
      navigateTo(href);
    }
  };
}

Resource.propTypes = {
  /**
   * Image path.
   */
  image: PropTypes.string.isRequired,

  /**
   * Title text. Should be short.
   */
  title: PropTypes.string.isRequired,

  /**
   * Description of the resource.
   */
  content: PropTypes.any.isRequired,

  /**
   * Button enter string.
   */
  enterText: PropTypes.string.isRequired,

  /**
   * Enter link.
   */
  href: PropTypes.string.isRequired
};

export default withStyles(styles)(Resource);
