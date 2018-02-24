import React from 'react';
import withStyles from 'react-jss';

import dropLeftA from '../../../assets/images/drops/drop_top_left_a.png';
import dropLeftB from '../../../assets/images/drops/drop_top_left_b.png';
import dropRightA from '../../../assets/images/drops/drop_top_right_a.png';
import dropRightB from '../../../assets/images/drops/drop_top_right_b.png';
import styles from './styles';

const TopDrops = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        Fig. 1 - Our fields of speciality
        <div className={classes.segment}></div>
      </div>
      <div className={classes.line}></div>
      <div className={classes.dropsContainer}>
        <div className="container">
          <div className={classes.drops}>
            <img src={dropLeftA} alt=""/>
            <img className={classes.hideOnSmall} src={dropLeftB} alt=""/>
          </div>
          <div className={classes.drops}>
            <img className={classes.hideOnSmall} src={dropRightA} alt=""/>
            <img src={dropRightB} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(TopDrops);
