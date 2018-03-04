import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import withStyles from 'react-jss';
import cx from 'classnames';

import navigation from '../../../data/navigation.json';
import logoReversed from '../../../assets/images/rwr/logo-mini-reversed.png';
import imageYoutube from '../../../assets/images/social/youtube.png';
import imageFacebook from '../../../assets/images/social/facebook.png';
import imageTwitter from '../../../assets/images/social/twitter.png';
import imageMeetup from '../../../assets/images/social/meetup.png';
import styles from './styles';

const Footer = props => {
  const {
    theme,
    sheet,
    classes,
    className,
    headerContent,
    footerContent,
    ...etc
  } = props;
  return (
    <footer className={cx(classes.root, 'container', className)} {...etc}>
      <div className="row">
        {!!headerContent && (
          <div className={cx(classes.contact, 'col-xs-12')}>
            {headerContent}
          </div>
        )}
        <div className="col-xs-12 col-sm-4 col-lg-3">
          <div className="row">
            <div className="col-xs-6">
              <Link to="/">
                <img className={classes.logo} src={logoReversed} />
              </Link>
            </div>
            <div className="col-xs-6">
              <div className={cx(classes.social, 'row')}>
                <div className="col-xs-6">
                  <a
                    href="https://www.youtube.com/channel/UCgL3tdpvoARHuX-_3eLWEgg"
                    target="youtube"
                  >
                    <img src={imageYoutube} alt="YouTube" />
                  </a>
                </div>
                <div className="col-xs-6">
                  <a
                    href="https://www.facebook.com/RealWorldReact"
                    target="facebook"
                  >
                    <img src={imageFacebook} alt="Facebook" />
                  </a>
                </div>
                <div className="col-xs-6">
                  <a href="https://twitter.com/rwreact" target="twitter">
                    <img src={imageTwitter} alt="Twitter" />
                  </a>
                </div>
                <div className="col-xs-6">
                  <a href="https://meetup.com/real-World-React" target="meetup">
                    <img src={imageMeetup} alt="Meetup" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-4 col-lg-6">
          <div className={classes.centerContainer}>{footerContent}</div>
        </div>
        <div className="col-xs-12 col-sm-4 col-lg-3">
          <div className="row">
            <div className={cx(classes.blockTitle, 'col-xs-12')}>
              <span className="text-primary">_</span>
              <strong>Sitemap</strong>
            </div>

            {/* Navigations */}
            {navigation.map((nav, index) => (
              <div
                className={index === 0 ? 'col-xs-7' : 'col-xs-5'}
                key={index}
              >
                {/* List of links */}
                {index === 0 && (
                  <Link to="/" className={classes.siteMapLink}>
                    Home
                  </Link>
                )}
                {nav.items.map((item, index2) => (
                  <Link
                    key={index2}
                    to={item.route}
                    className={classes.siteMapLink}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className={cx(classes.copy, 'col-xs-12')}>
          Copyright 2018 Real World React, LLC
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  /**
   * Component or string to renter in header of component
   */
  headerContent: PropTypes.any,

  /**
   * Component or string to renter in center footer of component
   */
  footerContent: PropTypes.any
};

export default withStyles(styles)(Footer);
