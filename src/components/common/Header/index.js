import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import withStyles from 'react-jss';
import cx from 'classnames';

import logoAuto from '../../../assets/images/rwr/logo-mini.png';
import logoInverted from '../../../assets/images/rwr/logo-mini-inverted.png';
import MenuDesktop from '../../navigation/MenuDesktop';
import MenuMobile from '../../navigation/MenuMobile';
import styles from './styles';

const Header = props => {
  const { classes, className, inverted } = props;
  return (
    <header className={cx(classes.root, 'container', className)}>
      <div className='row'>
        <div className='col-xs-3'>
          <Link to='/'>
            <img
              className={classes.logo}
              src={inverted ? logoInverted : logoAuto}
              alt='Real World React'
            />
          </Link>
        </div>
        <div className={cx(classes.menu, 'col-xs-9')}>
          <MenuMobile className={classes.mobile} inverted={inverted} />
          <MenuDesktop className={classes.desktop} inverted={inverted} />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  /**
   * Set theme with inverted colors.
   */
  inverted: PropTypes.bool,
};

export default withStyles(styles)(Header);
