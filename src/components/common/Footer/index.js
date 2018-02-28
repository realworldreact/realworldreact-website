import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import withStyles from 'react-jss';
import cx from 'classnames';

import navigation from '../../../data/navigation.json';
import logoReversed from '../../../assets/images/rwr/logo-mini-reversed.png';
import youtube from '../../../assets/images/footer/youtube.png';
import facebook from '../../../assets/images/footer/facebook.png';
import twitter from '../../../assets/images/footer/twitter.png';
import meetup from '../../../assets/images/footer/meetup.png';
import styles from './styles';

const Footer = props => {
  const {
    theme,
    sheet,
    classes,
    className,
    showContact,
    footerContent,
    headerContent,
    ...etc
  } = props;
  return (
    <footer className={cx(classes.root, 'container', className)} {...etc}>
      <div className="row">
        {headerContent && (
          <div className={cx(classes.contact, 'col-xs-12')}>
            {headerContent}
          </div>
        )}
        <div className="col-xs-12 col-sm-4 col-lg-3">
          <div className="row">
            <div className="col-xs-6">
              <a href="/">
                <img className={classes.logo} src={logoReversed} />
              </a>
            </div>
            <div className="col-xs-6">
              {/* TODO: Add social media links */}

              <div className={cx(classes.social, 'row')}>
                <div className="col-xs-6">
                  <a href="/">
                    <img src={youtube} alt="YouTube" />
                  </a>
                </div>
                <div className="col-xs-6">
                  <a href="/">
                    <img src={facebook} alt="facebook" />
                  </a>
                </div>
                <div className="col-xs-6">
                  <a href="/">
                    <img src={twitter} alt="Twitter" />
                  </a>
                </div>
                <div className="col-xs-6">
                  <a href="/">
                    <img src={meetup} alt="Meetup" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={cx(
            classes.centerContainer,
            'col-xs-12',
            'col-sm-4',
            'col-lg-6'
          )}
        >
          {footerContent}
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
   * Show the Contact Component in footer
   */
  showContact: PropTypes.bool,

  /**
   * Component or string to renter in header of component
   */

  headerContent: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

  /**
   * Component or string to renter in center footer of component
   */

  footerContent: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

Footer.defaultProps = {
  showContact: true
};

export default withStyles(styles)(Footer);
