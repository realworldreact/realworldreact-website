import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import withStyles from 'react-jss';
import cx from 'classnames';

import navigation from '../../../data/navigation.json';
import Button from '../../forms/Button';
import Dropdown from '../Dropdown';
import styles from './styles';

const MenuDesktop = props => {
  const { theme, sheet, classes, className, reversed, ...etc } = props;
  return (
    <div className={cx(classes.root, className)} {...etc}>
      <Link className={cx(classes.option, classes.link)} to='/'>Home</Link>

      {navigation.map((nav, index) => (
        <Dropdown
          key={index}
          className={classes.option}
          trigger={(
            <span className={classes.link}>{nav.name} <i className='mdi mdi-chevron-down' /></span>
          )}
          items={nav.items}
        />
      ))}

      <Button
        className={cx(classes.option, classes.button)}
        href='/contact'
        outline={reversed}
      >
        Let's Talk
      </Button>
    </div>
  );
};

MenuDesktop.propTypes = {
  /**
   * Set theme with reversed colors.
   */
  reversed: PropTypes.bool,
};

export default withStyles(styles)(MenuDesktop);
