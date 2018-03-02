import React from 'react';
import withStyles from 'react-jss';
import cx from 'classnames';

import styles from './styles';

const Quote = props => {
  const { theme, sheet, classes, className, ...etc } = props;
  return (
    <div className={cx(classes.root, className)} {...etc}>
      <div className={classes.quote}>
        “[Real World React is] full of talented, enthusiastic and passionate
        employees who truly care about the product they are delivering.”
      </div>
      <div className={classes.author}>
        <strong>Roger Hosein</strong>
        Full Stack Engineer at ShipHero
      </div>
    </div>
  );
};

export default withStyles(styles)(Quote);
