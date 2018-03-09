import React from 'react';
import Helmet from 'react-helmet';
import withStyles from 'react-jss';
import cx from 'classnames';

import imagePatternDots from '../assets/images/patterns/dots.png';
import imageLearnMoreMobile from '../assets/images/messages/learn-more-mobile.png';
import imageLearnMoreDesktop from '../assets/images/messages/learn-more-desktop.png';
import trainers from '../data/trainers.json';
import technologies from '../data/technologies.json';
import navigation from '../data/navigation.json';
import { Header, Footer, Drops, Heading, Trainer, Option } from '../components';
import { Contact, SignUp } from '../containers';

// The the navigation services items.
const navigationServices = navigation.find(item => item.id === 'services');

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

  // SERVICES
  services: {
    padding: [0, 20]
  },
  servicesTitle: {
    marginBottom: 60
  },
  servicesMessage: {
    position: 'absolute',
    left: '50%',
    top: -50,
    width: 140,
    height: 70,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${imageLearnMoreMobile})`
  },
  servicesOptions: {
    position: 'relative'
  },
  serviceOption: {
    marginBottom: 10
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

    // SERVICES
    servicesTitle: {
      marginBottom: 40
    },
    servicesMessage: {
      left: 'auto',
      right: -200,
      width: 200,
      height: 100,
      backgroundImage: `url(${imageLearnMoreDesktop})`
    },

    // FOOTER
    footerDrops: {
      display: 'block'
    }
  },

  // medium +
  '@media screen and (min-width: 64em)': {
    // INSTRUCTORS
    instructorItem: {
      // Min height of the largest trainer content.
      minHeight: 420
    }
  }
});

const TeamPage = ({ classes }) => (
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

        {/* SERVICES */}
        <div className={cx(classes.services, 'container')}>
          <div className="row">
            <div className="col-xs-12 col-sm-8">
              <h2 className={classes.servicesTitle}>
                Our experts will send your engineers through a hyperloop of
                productivity.
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-8">
              <div className={cx(classes.servicesOptions, 'row')}>
                <div className={classes.servicesMessage} />
                {navigationServices.items.map((item, index) => (
                  <div
                    className={cx(classes.serviceOption, 'col-xs-12 col-sm-6')}
                    key={index}
                  >
                    <Option to={item.route}>{item.name}</Option>
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

export default withStyles(styles)(TeamPage);
