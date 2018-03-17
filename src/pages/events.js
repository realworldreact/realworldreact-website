import React from 'react';
import Helmet from 'react-helmet';
import withStyles from 'react-jss';
import cx from 'classnames';

import imagePatternDots from '../assets/images/patterns/dots.png';
import settings from '../data/settings.json';
import events from '../data/events.json';
import { Header, Footer, Drops, Heading, EventItem } from '../components';
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
    padding: [20, 0]
  },
  mainRow: {},
  mainColumn: {},

  // HEADING
  heading: {
    display: 'flex'
  },
  headingTitle: {
    margin: 'auto'
  },
  headingTitleClassName: {},

  // EVENTS
  events: {
    marginTop: 40
  },
  event: {},
  eventSeparator: {
    display: 'block',
    width: '100%',
    height: 40
  },

  // FOOTER
  footer: {
    backgroundColor: theme.palette.inverted.base,
    backgroundImage: `url(${imagePatternDots})`,
    position: 'relative',
    marginTop: 40
  },
  footerDrops: {
    display: 'none'
  },

  // small -
  '@media screen and (max-width: 48em)': {
    // MAIN
    mainRow: {
      margin: 0
    },
    mainColumn: {
      padding: 0
    },

    // HEADING
    headingTitleClassName: {
      height: 65,
      fontSize: 65
    }
  },

  // small +
  '@media screen and (min-width: 48em)': {
    // MAIN
    mainContainer: {
      padding: [40, 20]
    },

    // EVENTS
    event: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    },
    eventItem: {
      zIndex: 2,
      maxWidth: 620
    },
    // Event item even
    eventItem0: {
      marginRight: 'auto'
    },
    // Event item odd
    eventItem1: {
      marginLeft: 'auto'
    },
    eventSeparator: {
      zIndex: 1,
      position: 'relative',
      '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        left: '50%',
        top: 0,
        height: 40,
        borderLeft: '1px solid #e9e9e9'
      },
      '&:after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        borderStyle: 'solid',
        borderColor: '#e9e9e9',
        borderWidth: 0
      },
      // Left event line
      '$eventItem0 + &': {
        '&:after': {
          left: '18%',
          width: 300,
          height: 205,
          borderWidth: '0 0 1px 1px'
        }
      },
      // Right event line
      '$eventItem1 + &': {
        '&:after': {
          right: '18%',
          width: 300,
          height: 205,
          borderWidth: '0 1px 1px 0'
        }
      }
    },

    // FOOTER
    footerDrops: {
      display: 'block'
    }
  }
});

const EventsPage = ({ classes }) => (
  <div>
    <Helmet>
      <title>Events | Real World React</title>
    </Helmet>
    <div className={classes.root}>
      {/* HEADER */}
      <Header />

      {/* MAIN */}
      <div className={classes.main}>
        <div className={cx(classes.mainContainer, 'container')}>
          <div className={cx(classes.mainRow, 'row')}>
            <div className={cx(classes.mainColumn, 'col-xs-12')}>
              <div className={classes.heading}>
                <Heading
                  className={classes.headingTitle}
                  titleClassName={classes.headingTitleClassName}
                  title="E V E N T S"
                  subtitle="Talks, Meetups, & Conferences"
                />
              </div>

              <div className={classes.events}>
                {events.map((event, index) => (
                  <div className={classes.event} key={event.id}>
                    <EventItem
                      className={cx(
                        classes.eventItem,
                        classes['eventItem' + index % 2]
                      )}
                      event={event}
                      googleAPIKey={settings.googleAPIKey}
                    />
                    {index < events.length - 1 && (
                      <div className={classes.eventSeparator} />
                    )}
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

export default withStyles(styles)(EventsPage);
