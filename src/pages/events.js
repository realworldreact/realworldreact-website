import React from 'react';
import Helmet from 'react-helmet';
import withStyles from 'react-jss';
import cx from 'classnames';

import imagePatternDots from '../assets/images/patterns/dots.png';
import { Header, Footer, Drops, Heading } from '../components';
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
      marginTop: 0
    }
  },
  mainContainer: {
    padding: 20
  },

  // HEADING
  heading: {
    display: 'flex'
  },
  headingTitle: {
    margin: 'auto'
  },
  headingTitleClassName: {},

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

  // small -
  '@media screen and (max-width: 30em)': {
    // HEADING
    headingTitleClassName: {
      height: 65,
      fontSize: 65
    }
  },

  // small +
  '@media screen and (min-width: 48em)': {
    // MAIN
    mainContainer: {
      padding: [40, 20]
    },

    // FOOTER
    footerDrops: {
      display: 'block'
    }
  }
});

const EventsPage = ({ classes }) => (
  <div>
    <Helmet>
      <title>Events | Real World React</title>
    </Helmet>
    <div className={classes.root}>
      {/* HEADER */}
      <Header />

      {/* MAIN */}
      <div className={classes.main}>
        <div className={cx(classes.mainContainer, 'container')}>
          <div className="row">
            <div className="col-xs-12">
              <div className={classes.heading}>
                <Heading
                  className={classes.headingTitle}
                  titleClassName={classes.headingTitleClassName}
                  title="E V E N T S"
                  subtitle="Talks, Meetups, & Conferences"
                />
              </div>
            </div>
          </div>
        </div>
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

export default withStyles(styles)(EventsPage);
