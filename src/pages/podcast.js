import React from 'react';
import Helmet from 'react-helmet';
import withStyles from 'react-jss';
import cx from 'classnames';

import imageReactProfiles from '../assets/images/podcast/react-profiles.png';
import imagePatternDots from '../assets/images/patterns/dots.png';
import podcast from '../data/podcast.json';
import { Header, Footer, Drops } from '../components';
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
    display: 'flex',
    alignItems: 'center'
  },
  headingLogo: {
    margin: [0, 20, 0, 0],
    height: 80
  },
  headingTitle: {
    margin: 0,
    lineHeight: 1.2
  },

  // CONTENT
  content: {
    padding: [30, 0]
  },
  contentTitle: {
    display: 'none'
  },

  // FEATURED
  featured: {
    marginBottom: 20
  },
  featuredTitle: {
    marginBottom: 20,
    fontFamily: theme.typography.secondary
  },
  featuredList: {
    display: 'flex',
    flexDirection: 'column'
  },
  featuredItem: {
    display: 'flex',
    marginBottom: 10
  },
  featuredItemPhoto: {
    flex: '0 0 auto',
    margin: ['auto', 10, 'auto', 0],
    width: 32,
    height: 32,
    backgroundSize: 'cover'
  },
  featuredItemText: {
    margin: ['auto', 0],
    fontSize: 14,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },

  // FOOTER
  footer: {
    backgroundColor: theme.palette.inverted.base,
    backgroundImage: `url(${imagePatternDots})`,
    marginTop: 20
  },
  footerDrops: {
    display: 'none'
  },

  // small +
  '@media screen and (min-width: 48em)': {
    // HEADING
    headingTitle: {
      display: 'none'
    },

    // CONTENT
    contentTitle: {
      display: 'block'
    },

    // FEATURED
    featuredList: {
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    featuredItem: {
      margin: [0, 10, 10, 0],
      width: 150
    },

    // FOOTER
    footer: {
      marginTop: 80
    },
    footerDrops: {
      display: 'block'
    }
  }
});

const PodcastPage = ({ classes }) => (
  <div>
    <Helmet>
      <title>Podcast | Real World React</title>
    </Helmet>
    <div className={classes.root}>
      {/* HEADER */}
      <Header />

      {/* MAIN */}
      <div className={classes.main}>
        <div className={cx(classes.mainContainer, 'container')}>
          {/* HEADING */}
          <div className="row">
            <div className="col-xs-12">
              <div className={classes.heading}>
                <img
                  className={classes.headingLogo}
                  src={imageReactProfiles}
                  alt="React Profiles"
                />
                <h1 className={classes.headingTitle}>
                  Podcasts coming soon...
                </h1>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="row">
            <div className="col-xs-12">
              <div className={classes.content}>
                <h1 className={classes.contentTitle}>
                  Podcasts coming soon...
                </h1>
                <p>
                  This podcast goes inside some of the top companies who have
                  made the switch to React. We interview engineers from
                  Eventbrite, Pinterest, Netlify, and NPR to get the inside
                  scoop on why and how they made the switch to React.
                </p>
              </div>
            </div>
          </div>

          {/* FEATURED */}
          <div className="row">
            <div className="col-xs-12 col-sm-8">
              <div className={classes.featured}>
                <div className={classes.featuredTitle}>
                  Fig. 1 - Featured Engineers
                </div>
                <div className={classes.featuredList}>
                  {podcast.featuredEngineers.map((enginner, index) => (
                    <div className={classes.featuredItem} key={index}>
                      <div
                        className={classes.featuredItemPhoto}
                        style={{ backgroundImage: `url(${enginner.photo}` }}
                      />
                      <div className={classes.featuredItemText}>
                        <div>
                          <strong>{enginner.name}</strong>
                        </div>
                        <div>{enginner.company}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4">
              <SignUp
                reversed={false}
                palette="primary"
                description="Get notified when the podcast is published by signing up for our (non-spammy) newsletter."
              />
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

export default withStyles(styles)(PodcastPage);
