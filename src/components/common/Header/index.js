import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import withStyles from 'react-jss';
import cx from 'classnames';

import logoAuto from '../../../assets/images/rwr/logo-mini.png';
import logoReversed from '../../../assets/images/rwr/logo-mini-reversed.png';
import MenuDesktop from '../../navigation/MenuDesktop';
import MenuMobile from '../../navigation/MenuMobile';
import styles from './styles';

const Header = props => {
  const {
    theme,
    sheet,
    classes,
    className,
    reversed,
    showHomeLink,
    ...etc
  } = props;
  return (
    <header className={cx(classes.root, 'container', className)} {...etc}>
      <div className="row">
        <div className="col-xs-3">
          <Link className={classes.logoLink} to="/">
            <img
              className={classes.logo}
              src={reversed ? logoReversed : logoAuto}
              alt="Real World React"
            />
          </Link>
        </div>
        <div className={cx(classes.menu, 'col-xs-9')}>
          <MenuMobile className={classes.mobile} reversed={reversed} />
          <MenuDesktop
            className={classes.desktop}
            reversed={reversed}
            showHomeLink={showHomeLink}
          />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  /**
   * Set theme with reversed colors.
   */
  reversed: PropTypes.bool,

  /**
   * In the list of links, add the home link in the beggining.
   */
  showHomeLink: PropTypes.bool
};

Header.defaultProps = {
  showHomeLink: true
};

export default withStyles(styles)(Header);
