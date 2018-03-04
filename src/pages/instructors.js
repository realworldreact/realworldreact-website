import React from 'react';
import Helmet from 'react-helmet';
import withStyles from 'react-jss';
import cx from 'classnames';

import imagePatternDots from '../assets/images/patterns/dots.png';
import trainers from '../data/trainers.json';
import technologies from '../data/technologies.json';
import { Header, Footer, Drops, Heading, Trainer } from '../components';
import { Contact, SignUp } from '../containers';

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
    padding: [20, 0]
  },

  // HEADING
  heading: {
    display: 'flex',
    marginBottom: 40
  },
  headingTitle: {
    margin: '0 auto'
  },

  // INSTRUCTORS
  instructors: {
    //
  },
  instructorItem: {
    marginBottom: 40
  },

  // FOOTER
  footer: {
    backgroundColor: theme.palette.inverted.base,
    backgroundImage: `url(${imagePatternDots})`,
    position: 'relative',
    marginTop: 80
  },
  footerDrops: {
    display: 'none'
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
  },

  // small +
  '@media screen and (min-width: 64em)': {
    // INSTRUCTORS
    instructorItem: {
      // Min height of the largest trainer contents.
      minHeight: 420
    }
  }
});

const InstructorsPage = ({ classes }) => (
  <div>
    <Helmet>
      <title>Instructors | Real World React</title>
    </Helmet>
    <div className={classes.root}>
      <Header />

      <div className={classes.main}>
        <div className={cx(classes.mainContainer, 'container')}>
          {/* HEADING */}
          <div className={classes.heading}>
            <Heading
              className={classes.headingTitle}
              title="T E A M"
              subtitle="Expert consultants and trainers"
            />
          </div>

          {/* INSTRUCTORS */}
          <div className={classes.instructors}>
            <div className="row">
              {trainers.map((trainer, index) => (
                <div key={index} className="col-xs-12 col-sm-6">
                  <Trainer
                    className={classes.instructorItem}
                    trainer={trainer}
                    technologies={technologies}
                  />
                </div>
              ))}
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

export default withStyles(styles)(InstructorsPage);
