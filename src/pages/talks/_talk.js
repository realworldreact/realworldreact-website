import React from 'react';
import Helmet from 'react-helmet';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from 'gatsby-link';

import imagePatternDots from '../../assets/images/patterns/dots.png';
import {
  Header,
  Drops,
  Footer,
  TechnologyLogo,
  Button
} from '../../components';
import { Contact, SignUp } from '../../containers';
import technologies from '../../data/technologies.json';
import talks from '../../data/talks.json';

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
    padding: [20, 0, 0],
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
    margin: [8, 0]
  },
  subtitle: {
    fontStyle: 'italic',
    fontFamily: theme.typography.secondary,
    color: theme.palette.text.base,
    marginBottom: 30
  },
  backButton: {
    marginTop: 20,
    display: 'none'
  },
  topButton: {
    margin: [0, 0, 20, 20],
    display: 'flex'
  },

  // RIGHT CONTENT
  rightTitle: {
    marginTop: 10,
    fontSize: 16,
    marginBottom: 10,
    backgroundColor: '#EAEAEA',
    padding: [10, 20],
    '& span': {
      display: 'none'
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
        margin: [0, -8]
      },
      '& .col-xs-12': {
        padding: [0, 8]
      }
    },
    videoFrame: {
      height: 530
    },
    backButton: {
      display: 'block'
    },
    topButton: {
      display: 'none'
    },
    leftContent: {
      maxWidth: 550,
      padding: 0
    },

    // RIGHT CONTENT
    rightTitle: {
      marginTop: 40,
      backgroundColor: 'transparent',
      padding: 0,
      '& span': {
        display: 'inline-block'
      }
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
  const {
    id,
    videoUrl,
    title,
    subtitle,
    content,
    specialties,
    nextTalk
  } = children;
  const nexTalk = talks.find(
    (item, index) => item.id === id && !nexTalk && talks[index + 1]
  );
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
                <Link className={cx(classes.topButton, 'bold')} to="/talks">
                  ← Back to All Talks
                </Link>
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
                <Link className={cx(classes.backButton, 'bold')} to="/talks">
                  ← Back to All Talks
                </Link>
              </div>
              <div className="col-xs-12 col-sm-4">
                <div className={classes.rightTitle}>
                  <span className="text-primary">_</span>
                  <strong>Technologies Discussed</strong>
                </div>
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
              {nexTalk && (
                <Button
                  showArrow
                  palette="text"
                  textAlign="left"
                  className={classes.button}
                  href={nexTalk.url}
                >
                  Up Next: {nexTalk.title}
                </Button>
              )}
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
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.object.isRequired,
    videoUrl: PropTypes.any.isRequired,
    content: PropTypes.object.isRequired,
    specialties: PropTypes.arrayOf(PropTypes.string).isRequired
  })
};

export default withStyles(styles)(Talk);
