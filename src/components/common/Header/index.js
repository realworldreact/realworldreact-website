import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import withStyles from 'react-jss';

import styles from './styles';

const Header = ({ classes, children }) => (
  <header className={classes.root}>
    <div className={classes.content}>
      <h1><Link to='/'>RWR</Link> {children}</h1>
    </div>
  </header>
);

Header.propTypes = {
  children: PropTypes.any.isRequired,
};

export default withStyles(styles)(Header);
