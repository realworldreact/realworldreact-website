import React from 'react';
import Helmet from 'react-helmet';
import withStyles from 'react-jss';
import cx from 'classnames';

import imagePatternDots from '../../assets/images/patterns/dots.png';
import { Header, Heading, Drops, Talk, Footer } from '../../components';
import { Contact, SignUp } from '../../containers';
import talks from '../../data/talks.json';

const styles = theme => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column'
  },

  // MAIN
  main: {
    flex: '1'
  },
  mainContainer: {
    padding: [20, 0],
    '& .row': {
      margin: 0
    },
    '& .col-xs-12': {
      padding: 0
    }
  },
  mainHeading: {
    display: 'flex',
    marginBottom: 20
  },
  talksHeading: {
    margin: 'auto'
  },
  headingTitleClassName: {},
  talk: {
    marginBottom: 20
  },

  // FOOTER
  footer: {
    backgroundColor: theme.palette.inverted.base,
    backgroundImage: `url(${imagePatternDots})`
  },
  footerDrops: {
    display: 'none'
  },

  // small -
  '@media screen and (max-width: 30em)': {
    // HEADING
    headingTitleClassName: {
      height: 80,
      fontSize: 80
    }
  },

  // small +
  '@media screen and (min-width: 48em)': {
    // MAIN
    mainContainer: {
      padding: [40, 20],
      '& .row': {
        margin: [0, '-0.5rem']
      },
      '& .col-xs-12': {
        padding: [0, '0.5rem']
      }
    },
    mainHeading: {
      textAlign: 'left',
      marginBottom: 50
    },

    // FOOTER
    footerDrops: {
      display: 'block'
    }
  }
});

const TalksPage = ({ classes }) => (
  <div>
    <Helmet>
      <title>Talks | Real World React</title>
    </Helmet>
    <div className={classes.root}>
      {/* HEADER */}
      <Header />

      {/* MAIN */}
      <div className={classes.main}>
        <div className={cx(classes.mainContainer, 'container')}>
          <div className="row">
            <div className={cx(classes.mainHeading, 'col-xs-12')}>
              <Heading
                className={classes.talksHeading}
                titleClassName={classes.headingTitleClassName}
                title="T A L K S"
                subtitle="Lessons from Leaders in the Field"
              />
            </div>
            <div className="col-xs-12">
              <div className="row">
                {talks.map((talk, index) => (
                  <div
                    key={index}
                    className={cx(classes.talk, 'col-xs-12', 'col-sm-6')}
                  >
                    <Talk talk={talk} />
                  </div>
                ))}
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

export default withStyles(styles)(TalksPage);
