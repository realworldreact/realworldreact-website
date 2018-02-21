import React from 'react';
import Helmet from 'react-helmet';
import withStyles from 'react-jss';

import logo from '../assets/images/logo.png';

const styles = () => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    widht: '100wh',
    height: '100vh',
  },
  logo: {
    display: 'block',
    margin: 'auto',
    textAlign: 'center',
    fontSize: 30,
  },
});

const HomePage = ({ classes }) => (
  <div className={classes.root}>
    <Helmet>
      <title>Real World React</title>
    </Helmet>
    <div className={classes.logo}>
      <img src={logo} />
      <div>Coming Soon</div>
    </div>
  </div>
);

export default withStyles(styles)(HomePage);
