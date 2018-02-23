import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import withStyles from 'react-jss';
import cx from 'classnames';

import logoReversed from '../../../assets/images/rwr/logo-mini-reversed.png';
import styles from './styles';

const Footer = props => {
  const { theme, sheet, classes, className, ...etc } = props;
  return (
    <footer className={cx(classes.root, 'container', className)} {...etc}>
      <div className='row'>
        <div className='col-xs-12'>
          <img
            className={classes.logo}
            src={logoReversed}
          />
        </div>
      </div>
    </footer>
  );
};

export default withStyles(styles)(Footer);
