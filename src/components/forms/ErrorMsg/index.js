import React from 'react';
import withStyles from 'react-jss';
import cx from 'classnames';

import styles from './styles';

const ErrorMsg = props => {
  const { theme, sheet, classes, className, children, ...etc } = props;
  const cls = cx(classes.root, className);
  return (
    <div className={cls} {...etc}>
      {children}
    </div>
  );
};

export default withStyles(styles)(ErrorMsg);
