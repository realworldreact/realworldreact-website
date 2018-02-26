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
  const { theme, sheet, classes, className, ...etc } = props;
  return (
    <footer className={cx(classes.root, 'container', className)} {...etc}>
      <div className="row">
        <div className="col-xs-12 col-sm-4">
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
        <div className="col-xs-12 col-sm-4" />
        <div className="col-xs-12 col-sm-4">
          <div className="row">
            <div className={cx(classes.bockTitle, 'col-xs-12')}>
              <span className="text-primary">_</span>
              <strong>Sitemap</strong>
            </div>

            {/* Navigations */}
            {navigation.map((nav, index) => (
              <div className="col-xs-6" key={index}>
                {/* List of links */}
                {index === 0 && (
                  <Link to="/" className={classes.siteMapLink}>
                    Home
                  </Link>
                )}
                {nav.items.map((item, index2) => (
                  <Link to={item.route} className={classes.siteMapLink}>
                    {item.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default withStyles(styles)(Footer);
