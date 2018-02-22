import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import withStyles from 'react-jss';

import logo from '../../../assets/images/logo.png';
import styles from './styles';

const Header = ({ classes, children }) => (
  <header className={classes.root}>
    <Link to='/'>
      <img
        className={classes.logo}
        src={logo}
        alt='Real World React Logo'
      />
    </Link>
    {' '}
    <span>{children}</span>
  </header>
);

Header.propTypes = {
  children: PropTypes.any.isRequired,
};

export default withStyles(styles)(Header);
