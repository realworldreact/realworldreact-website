import React from 'react';
import Helmet from 'react-helmet';
import withStyles from 'react-jss';
import cx from 'classnames';

import imagePatternDots from '../assets/images/patterns/dots.png';
import { Header, Footer, Drops, Quote } from '../components';
import { Contact, SignUp, Team } from '../containers';

const styles = theme => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column'
  },

  // MAIN
  main: {
    flex: '1',
    '& h1': {
      marginTop: 0
    }
  },
  mainContainer: {
    padding: 20
  },
  leftContent: {
    maxWidth: '100%'
  },

  // TEAM
  team: {
    marginTop: 60,
    padding: [0, 20]
  },

  // FOOTER
  footer: {
    backgroundColor: theme.palette.inverted.base,
    backgroundImage: `url(${imagePatternDots})`,
    position: 'relative',
    marginTop: 120
  },
  footerDrops: {
    display: 'none'
  },

  // small +
  '@media screen and (min-width: 48em)': {
    // MAIN
    mainContainer: {
      paddingTop: 120
    },
    leftContent: {
      maxWidth: 550
    },

    // TEAM
    team: {
      marginTop: 20
    },

    // FOOTER
    footerDrops: {
      display: 'block'
    }
  }
});

const ConsultingPage = ({ classes }) => (
  <div>
    <Helmet>
      <title>Consulting | Real World React</title>
    </Helmet>
    <div className={classes.root}>
      {/* HEADER */}
      <Header />

      {/* MAIN */}
      <div className={classes.main}>
        <div className={cx(classes.mainContainer, 'container')}>
          <div className="row">
            <div className="col-xs-12 col-sm-8">
              <div className={classes.leftContent}>
                <h1>
                  In person, on-site consulting services for{' '}
                  <span className="text-inverted background-secondary">
                    scaling your architecture
                  </span>{' '}
                  effectively
                </h1>
              </div>
            </div>

            <div className="col-sm-4" />
            <div className="col-xs-12 col-sm-8">
              <div className={classes.leftContent}>
                <p>
                  Your engineering team is full of talented and capable
                  individuals. They are led by competent managers. But even the
                  best teams can benefit from outside, expert advice.
                </p>
                <p>
                  Our consulting services can help you to effectively scale your
                  architecture and to ensure that the decisions you are making
                  today will benefit you in 10 years time, not get you into
                  technical debt.
                </p>
                <p>
                  Contact us today to learn how one of our expert consultants
                  can help you to build tomorrow’s architecture, today.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <Quote />
            </div>
          </div>
        </div>
      </div>

      {/* TEAM */}
      <div className={cx(classes.team, 'container')}>
        <Team />
      </div>

      {/* FOOTER */}
      <div className={classes.footer}>
        <div className={classes.footerDrops}>
          <Drops bottom />
        </div>
        <Footer footerContent={<SignUp />} headerContent={<Contact />} />
      </div>
    </div>
  </div>
);

export default withStyles(styles)(ConsultingPage);
