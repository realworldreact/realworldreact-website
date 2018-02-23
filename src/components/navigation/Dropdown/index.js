import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import withStyles from 'react-jss';
import cx from 'classnames';
import SimpleDropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';

import styles from './styles';

const Dropdown = props => {
  const { theme, sheet, classes, className, trigger, items, ...etc } = props;
  return (
    <div className={cx(classes.root, className)}>
      <SimpleDropdown removeElement>
        <DropdownTrigger>{trigger}</DropdownTrigger>
        <DropdownContent className={classes.content}>
          {items.map((item, index) => (
            <Link key={index} className={classes.item} to={item.route}>
              {item.name}
            </Link>
          ))}
        </DropdownContent>
      </SimpleDropdown>
    </div>
  );
};

Dropdown.propTypes = {
  trigger: PropTypes.any.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      route: PropTypes.string,
    })
  ).isRequired,
};

export default withStyles(styles)(Dropdown);
