import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import cx from 'classnames';

import styles from './styles';

const TechnologyLogo = props => {
  const { theme, sheet, classes, className, name, logo, ...etc } = props;
  const cls = cx(classes.root, className);
  return (
    <div className={cls}>
      <img className={classes.logo} src={logo} alt={name} />
      <div className={classes.name}>
        {name}
      </div>
    </div>
  );
};

TechnologyLogo.propTypes = {
  /**
   * Technology name.
   */
  name: PropTypes.string.isRequired,

  /**
   * Technology logo absolute path.
   */
  logo: PropTypes.string.isRequired,
  /**
   * Technology route to website.
   */
  route: PropTypes.string,
};

export default withStyles(styles)(TechnologyLogo);
