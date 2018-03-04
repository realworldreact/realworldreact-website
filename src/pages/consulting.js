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
                  <span className="text-inverted background-secondary">
                    &nbsp;Expert developers&nbsp;
                  </span>{' '}
                  available for full-time hire.
                </h1>
              </div>
            </div>

            <div className="col-sm-4" />
            <div className="col-xs-12 col-sm-8">
              <div className={classes.leftContent}>
                <p>
                  As technologists, it’s all too easy to get decision fatigue.
                  Fancy new solutions promise to solve our technical and
                  business problems. But what is the best choice, and why? Will
                  heading down one path get you in trouble 2 years from now?
                  What are the trade-offs between Angular and React? What is the
                  cost of not changing from your current stack?
                </p>
                <p>
                  We can help you to answer these questions and more. With
                  expert advice, code reviews, and one-on-one coding assistance,
                  we’ll guide you through the process to modernize your stack,
                  lower costs, increase your productivity, and increase
                  developer happiness.
                </p>
                <p>
                  Don’t just learn about the technologies redefining tomorrow’s
                  infrastructure -- learn why they will save you money and even
                  help you attract new talent, today.
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
