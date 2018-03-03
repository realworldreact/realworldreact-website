import React from 'react';
import Helmet from 'react-helmet';
import withStyles from 'react-jss';

import imagePatternDots from '../assets/images/patterns/dots.png';
import { Contact, SignUp } from '../containers';
import { Header, Footer } from '../components';

const styles = theme => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    backgroundColor: theme.palette.inverted.base,
    backgroundImage: `url(${imagePatternDots})`
  },
  main: {
    padding: 20
  }
});

const ContactPage = ({ classes }) => (
  <div>
    <Helmet>
      <title>Contact | Real World React</title>
    </Helmet>
    <div className={classes.root}>
      {/* HERO */}
      <div className="container">
        <Header reversed />
      </div>

      {/* MAIN */}
      <div className={classes.main}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Contact />
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div>
        <Footer footerContent={<SignUp />} />
      </div>
    </div>
  </div>
);

export default withStyles(styles)(ContactPage);
