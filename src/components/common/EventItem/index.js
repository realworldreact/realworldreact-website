import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import cx from 'classnames';

import Button from '../../forms/Button';
import styles from './styles';

const EventItem = props => {
  const {
    theme,
    sheet,
    classes,
    className,
    event,
    googleAPIKey,
    ...etc
  } = props;
  return (
    <div className={cx(classes.root, className)} {...etc}>
      <div className={classes.main}>
        <div className={classes.content}>
          <div className={classes.name}>{event.name}</div>
          <div className={classes.talksTitle}>
            <span className="text-primary">_</span>Talks
          </div>
          <div className={classes.talks}>
            {event.talks.map((talk, index) => (
              <div key={index} className={classes.talksItem}>
                {talk}
              </div>
            ))}
          </div>
        </div>
        <div className={classes.info}>
          <div
            className={classes.map}
            onClick={() =>
              window.open(
                `https://www.google.com.co/maps/@${event.mapLat},${
                  event.mapLng
                },${event.mapZoom}z`,
                'eventLocation'
              )
            }
          />
          <div className={classes.details}>
            <div className={classes.detailsItem}>
              <div className={classes.detailsItemIcon}>
                <i className="mdi mdi-clock" />
              </div>
              <div className={classes.detailsItemText}>
                <div>{event.date}</div>
                <div>{event.time}</div>
              </div>
            </div>
            <div className={classes.detailsItem}>
              <div className={classes.detailsItemIcon}>
                <i className="mdi mdi-map-marker" />
              </div>
              <div className={classes.detailsItemText}>
                <div>{event.place}</div>
                <div>{event.address}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button
        className={classes.button}
        palette="text"
        showArrow
        onClick={() => window.open(event.meetupLink, '_blank')}
      >
        Learn more and RSVP at Meetup.com
      </Button>
    </div>
  );
};

EventItem.propTypes = {
  /**
   * Event definiton.
   */
  event: PropTypes.shape({
    meetupLink: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    mapLat: PropTypes.number.isRequired,
    mapLng: PropTypes.number.isRequired,
    mapZoom: PropTypes.number.isRequired,
    talks: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,

  /**
   * Google API key to render maps.
   */
  googleAPIKey: PropTypes.string.isRequired
};

export default withStyles(styles)(EventItem);
