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
      <div className={cx(classes.main, classes.mainTransition)}>
        <div
          className={classes.image}
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className={classes.info}>
          <h1>{title}</h1>
          <div
            className={classes.description}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
      <div className={classes.cta}>
        <Button
          palette="text"
          textAlign="left"
          children="Watch Now"
          showArrow
          href={`/talks/${url}`}
        />
      </div>
    </article>
  );
};

Talk.propTypes = {
  /**
   * Talk definition.
   */
  talk: PropTypes.shape({
    id: PropTypes.string,
    url: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
  }).isRequired
};

export default withStyles(styles)(Talk);
