import React from 'react';
import Helmet from 'react-helmet';
import withStyles from 'react-jss';
import cx from 'classnames';

import imagePatternDots from '../assets/images/patterns/dots.png';
import { Header, Footer, TopDrops, TechnologyLogo } from '../components';
import technologies from '../data/technologies.json';

const styles = (theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
  },

  // HERO
  hero: {
    backgroundColor: theme.palette.inverted.base,
    backgroundImage: `url(${imagePatternDots})`,
  },
  heading: {
    margin: 'auto',
    padding: [0, 20],
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'relative',
    color: '#fff',
    '& h1': {
      fontSize: 24,
    },
  },
  headingDescription: {
    fontFamily: theme.typography.secondary,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#fff',
    position: 'absolute',
    bottom: -70,
    fontWeight: 300,
    left: 0,
    width: '100%'
  },
  continueLabel: {
    padding: [0, 20, 40],
    fontFamily: theme.typography.secondary,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#fff',
  },

  // MAIN
  main: {
    flex: '1',
  },

  // LOGOS
  logos: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  // FOOTER
  footer: {
    backgroundColor: theme.palette.inverted.base,
    backgroundImage: `url(${imagePatternDots})`,
  },

  // small +
  '@media screen and (min-width: 48em)': {
    heading: {
      padding: [80, 20, 0],
      width: '76%',
      '& h1': {
        fontSize: 32,
      },
    },
    headingDescription: {
      bottom: -100,
    }
  },
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
        <div className='container'>
          <div className={classes.heading}>
            <h1>
              We are a professional services and consulting firm specializing
              in <span className='text-inverted background-secondary'>&nbsp;modern front-end tools&nbsp;</span> and
              serverless architecture.
            </h1>
            <div className={classes.headingDescription}>Fig. 1 - Our fields of speciality</div>
          </div>
        </div>
        <TopDrops/>
      </div>

      {/* MAIN */}
      <div className={classes.main}>
        <div className={cx(classes.logos, 'container')}>
          {technologies.map((item, key) => (
            <TechnologyLogo name={item.name} logo={item.logo} route={item.route} key={key}/>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div className={classes.footer}>
        <Footer></Footer>
      </div>

    </div>
  </div>
);

export default withStyles(styles)(HomePage);
