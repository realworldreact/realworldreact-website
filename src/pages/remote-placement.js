import React from 'react';
import Helmet from 'react-helmet';
import withStyles from 'react-jss';
import cx from 'classnames';

import imageLetsChat from '../assets/images/messages/lets-chat.png';
import imagePatternDots from '../assets/images/patterns/dots.png';
import { Header, Footer, Drops, Quote } from '../components';
import { Contact, SignUp } from '../containers';

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
      marginTop: 0,
      fontSize: 20
    }
  },
  mainContainer: {
    padding: 20
  },
  leftContent: {
    maxWidth: '100%'
  },

  // FOOTER
  footer: {
    backgroundColor: theme.palette.inverted.base,
    backgroundImage: `url(${imagePatternDots})`,
    position: 'relative',
    marginTop: 120
  },
  footerLetsChat: {
    position: 'absolute',
    top: -70,
    zIndex: 10,
    left: '50%',
    marginLeft: -10,
    '& img': {
      width: 100,
      height: 100
    }
  },
  footerDrops: {
    display: 'none'
  },

  // small +
  '@media screen and (min-width: 48em)': {
    // MAIN
    main: {
      '& h1': {
        fontSize: 32
      }
    },
    mainContainer: {
      paddingTop: 120
    },
    leftContent: {
      maxWidth: 550
    },

    // FOOTER
    footerLetsChat: {
      top: -70,
      marginLeft: 120,
      '& img': {
        width: 150,
        height: 150
      }
    },
    footerDrops: {
      display: 'block'
    }
  }
});

const RemotePlacementPage = ({ classes }) => (
  <div>
    <Helmet>
      <title>Remote Placement | Real World React</title>
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
                  Expert developers available for{' '}
                  <span className="text-inverted background-secondary">
                    &nbsp;full-time employment&nbsp;
                  </span>
                </h1>
              </div>
            </div>
            <div className="col-sm-4" />
            <div className="col-xs-12 col-sm-8">
              <div className={classes.leftContent}>
                <p>
                  We know how difficult it is to hire well-qualified engineers.
                  There is such high demand that many companies pay upwards of
                  25% first-year’s salary for placement services. Without the
                  right talent, it becomes more difficult to meet business goals
                  and product deadlines.
                </p>
                <p>
                  At Real World React, we have a better solution. You can hire
                  well-qualified engineers for full-time remote work -- without
                  the recruitment fees. Once hired, they are your employees
                  working under your management.
                </p>
                <p>
                  All remote engineers are sourced from the top 1% of applicants
                  and undergo a comprehensive training program to ensure they
                  are ready to go from day 1. We specialize in training sound
                  engineering principles in addition to modern technologies such
                  as React. They even developed this website with React.
                </p>
                <p>
                  Don’t waste any more time searching for the right candidates.
                  Contact us today to see if our remote talent is right for you.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <Quote />
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className={classes.footer}>
        <div className={classes.footerLetsChat}>
          <img src={imageLetsChat} />
        </div>
        <div className={classes.footerDrops}>
          <Drops bottom />
        </div>
        <Footer footerContent={<SignUp />} headerContent={<Contact />} />
      </div>
    </div>
  </div>
);

export default withStyles(styles)(RemotePlacementPage);
