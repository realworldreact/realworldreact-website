import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import cx from 'classnames';

import Button from '../../forms/Button';
import styles from './styles';

const Talk = props => {
  const { theme, sheet, classes, className, talk, ...etc } = props;
  const { image, title, description, id } = talk;
  return (
    <article className={cx(classes.root, className)} {...etc}>
      <div className={cx(classes.main, 'main-transition')}>
        <div
          className={classes.image}
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className={classes.description}>
          <h4>{title}</h4>
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
      <div className="cta">
        <Button
          palette="text"
          textAlign="left"
          children="Watch Now"
          showArrow
          href="/"
        />
      </div>
    </article>
  );
};

Talk.propTypes = {
  /**
   * talk theme definition.
   */
  talk: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    content: PropTypes.string,
    author: PropTypes.string,
    image: PropTypes.string,
    from: PropTypes.string,
    videoUrl: PropTypes.string,
    specialties: PropTypes.array
  }).isRequired
};

export default withStyles(styles)(Talk);
