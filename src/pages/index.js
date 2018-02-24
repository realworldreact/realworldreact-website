import React from 'react';
import Helmet from 'react-helmet';
import withStyles from 'react-jss';

import imagePatternDots from '../assets/images/patterns/dots.png';
import { Header, Footer } from '../components';

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
    padding: [0, 20, 20],
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    '& h1': {
      fontSize: 24,
    },
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

  // FOOTER
  footer: {
    backgroundColor: theme.palette.inverted.base,
    backgroundImage: `url(${imagePatternDots})`,
  },

  // small +
  '@media screen and (min-width: 48em)': {
    heading: {
      padding: [80, 20],
      width: '76%',
      '& h1': {
        fontSize: 32,
      },
    },
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
          </div>
        </div>
        <div className={classes.continueLabel}>
          Fig. 1 - Our fields of speciality
        </div>
      </div>

      {/* MAIN */}
      <div className={classes.main}></div>

      {/* FOOTER */}
      <div className={classes.footer}>
        <Footer></Footer>
      </div>

    </div>
  </div>
);

export default withStyles(styles)(HomePage);
