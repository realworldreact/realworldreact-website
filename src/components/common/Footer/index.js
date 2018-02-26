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
import { SignUp, Contact } from '../../../containers';

const Footer = props => {
  const { theme, sheet, classes, className, showContact, ...etc } = props;
  return (
    <footer className={cx(classes.root, 'container', className)} {...etc}>
      <div className="row">
        {showContact && (
          <div className={cx(classes.contact, 'col-xs-12')}>
            <Contact />
          </div>
        )}
        <div className="col-xs-12 col-sm-4 col-lg-3">
          <div className="row">
            <div className="col-xs-6">
              <img className={classes.logo} src={logoReversed} />
            </div>
            <div className="col-xs-6">
              <div className={cx(classes.social, 'row')}>
                <div className="col-xs-6">
                  <img src={youtube} alt="YouTube" />
                </div>
                <div className="col-xs-6">
                  <img src={facebook} alt="facebook" />
                </div>
                <div className="col-xs-6">
                  <img src={twitter} alt="Twitter" />
                </div>
                <div className="col-xs-6">
                  <img src={meetup} alt="Meetup" />
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
          <SignUp />
        </div>
        <div className="col-xs-12 col-sm-4 col-lg-3">
          <div className="row">
            <div className={cx(classes.bockTitle, 'col-xs-12')}>
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
  showContact: PropTypes.bool
};

Footer.defaultProps = {
  showContact: true
};

export default withStyles(styles)(Footer);
