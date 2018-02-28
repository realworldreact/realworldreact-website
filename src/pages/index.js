import React from 'react';
import Helmet from 'react-helmet';
import withStyles from 'react-jss';
import cx from 'classnames';

import imagePatternDots from '../assets/images/patterns/dots.png';
import technologies from '../data/technologies.json';
import { Header, Footer, Drops, TechnologyLogo } from '../components';
import HomeServices from './home/_services';
import { Contact, SignUp } from '../containers';

const styles = theme => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column'
  },

  // HERO
  hero: {
    backgroundColor: theme.palette.inverted.base,
    backgroundImage: `url(${imagePatternDots})`
  },
  heading: {
    position: 'relative',
    margin: 'auto',
    padding: [0, 20],
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    '& h1': {
      fontSize: 24
    }
  },
  headingFooter: {
    position: 'absolute',
    left: 0,
    bottom: -70,
    width: '100%',
    fontFamily: theme.typography.secondary,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 300
  },

  // MAIN
  main: {
    flex: '1'
  },

  // LOGOS
  logos: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  technologyLogo: {
    width: '50%'
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
    // HERO
    heading: {
      padding: [80, 20, 0],
      width: '76%',
      '& h1': {
        fontSize: 32
      }
    },
    headingFooter: {
      bottom: -100
    },

    // LOGOS
    logos: {
      marginTop: 40,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    technologyLogo: {
      width: '14.28%'
    },

    // FOOTER
    footerDrops: {
      display: 'block'
    }
  }
});

const HomePage = ({ classes }) => (
  <div>
    <Helmet>
      <title>Real World React</title>
    </Helmet>
    <div className={classes.root}>
      {/* HERO */}
      <div className={classes.hero}>
        <Header reversed />
        <div className="container">
          <div className={classes.heading}>
            <h1>
              We are a professional services and consulting firm specializing in{' '}
              <span className="text-inverted background-secondary">
                &nbsp;modern front-end tools&nbsp;
              </span>{' '}
              and serverless architecture.
            </h1>
            <div className={classes.headingFooter}>
              Fig. 1 - Our fields of speciality
            </div>
          </div>
        </div>
        <Drops />
      </div>

      {/* MAIN */}
      <div className={classes.main}>
        {/* LOGOS */}
        <div className={cx(classes.logos, 'container')}>
          {technologies.map((item, key) => (
            <div key={key} className={classes.technologyLogo}>
              <TechnologyLogo
                name={item.name}
                logo={item.logo}
                route={item.route}
              />
            </div>
          ))}
        </div>

        {/* SERVICES */}
        <HomeServices />
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

export default withStyles(styles)(HomePage);
