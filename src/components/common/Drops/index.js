import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import cx from 'classnames';

import dropLeftA from '../../../assets/images/drops/drop_top_left_a.png';
import dropLeftB from '../../../assets/images/drops/drop_top_left_b.png';
import dropRightA from '../../../assets/images/drops/drop_top_right_a.png';
import dropRightB from '../../../assets/images/drops/drop_top_right_b.png';
import styles from './styles';

const Drops = props => {
  const { theme, sheet, classes, className, bottom, ...etc } = props;
  return (
    <div className={classes.root} {...etc}>
      <div className={classes.content}>
        <div className={classes.segment} />
      </div>
      <div className={classes.line} />
      <div className={classes.dropsContainer}>
        <div className="container">
          <div className={classes.drops}>
            <img className={classes.dropImage} src={dropLeftA} />
            <div className={cx(classes.bigDropImage, classes.hideOnSmall)}>
              <img className={classes.dropImage} src={dropLeftB} />
              <img
                className={cx(classes.dropLogo, classes.logoA)}
                src="/images/technologies/redux.jpg"
              />
            </div>
          </div>
          <div className={classes.drops}>
            <div className={cx(classes.bigDropImage, classes.hideOnSmall)}>
              <img className={classes.dropImage} src={dropRightA} />
              <img
                className={cx(classes.dropLogo, classes.logoB)}
                src="/images/technologies/react.jpg"
              />
            </div>
            <img className={classes.dropImage} src={dropRightB} />
          </div>
        </div>
      </div>
    </div>
  );
};

Drops.propTypes = {
  /**
   * Rotate 180 the component and remove the line and logos in drops.
   */
  bottom: PropTypes.bool
};

export default withStyles(styles)(Drops);
