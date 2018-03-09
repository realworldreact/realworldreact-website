import React from 'react';
import Helmet from 'react-helmet';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from 'gatsby-link';

import imagePatternDots from '../../assets/images/patterns/dots.png';
import { Header, Drops, Footer, TechnologyLogo, Button } from '../../components';
import { Contact, SignUp } from '../../containers';
import technologies from '../../data/technologies.json';

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
      margin: 0
    }
  },
  mainContainer: {
    padding: [40, 0, 0],
    '& .row': {
      margin: 0
    },
    '& .col-xs-12': {
      padding: 0
    }
  },
  videoContainer: {
    marginBottom: 20
  },
  videoFrame: {
    width: '100%',
    height: 200
  },
  leftContent: {
    maxWidth: '100%',
    marginTop: 20,
    padding: [0, 20]
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'stretch'
  },
  logo: {
    width: '100%',
    padding: [25, 0],
    margin: ['0.5rem', 0]
  },
  subtitle: {
    fontStyle: 'italic',
    fontFamily: theme.typography.secondary,
    color: theme.palette.primary.base,
    marginBottom: 30,
    '& span': {
      color: theme.palette.text.base
    }
  },
  backButton: {
    display: 'inline-block',
    marginTop: 20,
    fontWeight: 'bold',
    position: 'absolute',
    top: 80,
    left: 20
  },

  // RIGHT CONTENT
  rightContent: {
    '& h2': {
      marginTop: 10,
      fontSize: 16,
      marginBottom: 10,
      backgroundColor: '#EAEAEA',
      padding: [10, 20],
      '& span': {
        display: 'none'
      }
    }
  },
  button: {
    width: '100%',
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

  // small +
  '@media screen and (min-width: 48em)': {
    // MAIN
    mainContainer: {
      padding: [40, 20, 20],
      '& .row': {
        margin: [0, '-0.5rem']
      },
      '& .col-xs-12': {
        padding: [0, '0.5rem']
      }
    },
    videoFrame: {
      height: 530
    },
    leftContent: {
      maxWidth: 550,
      padding: 0
    },

    // RIGHT CONTENT
    rightContent: {
      '& h2': {
        marginTop: 30,
        marginBottom: 10,
        backgroundColor: 'transparent',
        padding: 0,
        '& span': {
          display: 'inline-block'
        }
      }
    },
    backButton: {
      position: 'relative',
      top: 0,
      left: 0
    },
    button: {
      display: 'none'
    },
    logo: {
      border: [1, 'solid', '#EAEAEA']
    },

    // FOOTER
    footerDrops: {
      display: 'block'
    }
  }
});

const Talk = ({ classes, children }) => {
  const { videoUrl, title, subtitle, content, specialties, nextTalk } = children;
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className={classes.root}>
        {/* HEADER */}
        <Header />

        {/* MAIN */}
        <div className={classes.main}>
          <div className={cx(classes.mainContainer, 'container')}>
            <div className="row">
              <div className={cx(classes.videoContainer, 'col-xs-12')}>
                <iframe
                  className={classes.videoFrame}
                  src={videoUrl}
                  frameBorder="0"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-8">
                <div className={classes.leftContent}>
                  <h1>{title}</h1>
                  <div className={classes.subtitle}>{subtitle}</div>
                  <div>{content}</div>
                </div>
                <Link className={classes.backButton} to="/talks">
                  ← Back to All Talks
                </Link>
              </div>
              <div className="col-xs-12 col-sm-4">
                <div className={classes.rightContent}>
                  <h2>
                    <span className="text-primary">_</span>
                    <strong>Technologies Discussed</strong>
                  </h2>
                  <div className="row">
                    {specialties.map((item, index) => {
                      const tech = technologies.find(t => t.id === item);
                      return (
                        <div
                          className={cx(
                            classes.logoContainer,
                            'col-xs-2 col-sm-6'
                          )}
                          key={index}
                        >
                          <div className={classes.logo}>
                            <TechnologyLogo
                              hideNameOnSmall
                              logo={tech.logo}
                              name={tech.name}
                              route={tech.route}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <Button
                showArrow
                palette="text"
                textAlign="left"
                className={classes.button}
                href={nextTalk.url}
              >
                Up Next: {nextTalk.name}
              </Button>
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
};

Talk.propTypes = {
  /**
   * Talk definitions.
   */
  children: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.object.isRequired,
    videoUrl: PropTypes.any.isRequired,
    content: PropTypes.object.isRequired,
    specialties: PropTypes.arrayOf(PropTypes.string).isRequired,
    nextTalk: PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    }).isRequired
  })
};

export default withStyles(styles)(Talk);
