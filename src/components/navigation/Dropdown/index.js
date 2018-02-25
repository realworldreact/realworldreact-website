import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import cx from 'classnames';
import SimpleDropdown, {
  DropdownTrigger,
  DropdownContent
} from 'react-simple-dropdown';

import Option from '../../forms/Option';
import styles from './styles';

const Dropdown = props => {
  const { theme, sheet, classes, className, trigger, items, ...etc } = props;
  return (
    <div className={cx(classes.root, className)} {...etc}>
      <SimpleDropdown removeElement>
        <DropdownTrigger>{trigger}</DropdownTrigger>
        <DropdownContent className={classes.content}>
          {items.map((item, index) => (
            <Option key={index} className={classes.item} to={item.route}>
              {item.name}
            </Option>
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
      route: PropTypes.string
    })
  ).isRequired
};

export default withStyles(styles)(Dropdown);
