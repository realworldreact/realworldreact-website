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
  componentHeading: {
    textAlign: 'center',
    marginBottom: 20
  },
  talksHeading: {
    display: 'inline-block',
    margin: [0, 'auto'],
    maxWidth: 330
  },

  // FOOTER
  footer: {
    backgroundColor: theme.palette.inverted.base,
    backgroundImage: `url(${imagePatternDots})`
  },
  footerDrops: {
    display: 'none'
  },

  // small +
  '@media screen and (min-width: 48em)': {
    // MAIN
    mainContainer: {
      padding: [60, 20, 20],
      '& .row': {
        margin: [0, '-0.5rem']
      },
      '& .col-xs-12': {
        padding: [0, '0.5rem']
      }
    },
    componentHeading: {
      textAlign: 'left',
      marginBottom: 50
    },
    talksHeading: {
      maxWidth: 370
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
            <div className={cx(classes.componentHeading, 'col-xs-12')}>
              <Heading
                letterSpace={15}
                className={classes.talksHeading}
                title="TALKS"
                subtitle="Lessons from Leaders in the Field"
              />
            </div>
            <div className="col-xs-12">
              <div className="row">
                {talks.map((talk, index) => (
                  <div key={index} className="col-xs-12 col-sm-6">
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
