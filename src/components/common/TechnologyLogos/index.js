import React from 'react';
import withStyles from 'react-jss';
import cx from 'classnames';
import { withPrefix } from 'gatsby-link';

import technologyBrands from '../../../data/technologyBrands.json';

import styles from './styles';

const TechnologyLogos = props => {
  const { classes } = props;
  return (
    <div className={cx(classes.root, 'container')}>
      {technologyBrands.map((item, key) => {
        return <div key={key} className={classes.brand}>
                <img src={withPrefix(item.logo)} alt={item.name} />
                <div className={classes.name}>
                  {item.name}
                </div>
               </div>;
      })}
    </div>
  );
};

export default withStyles(styles)(TechnologyLogos);
