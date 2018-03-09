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

/**
 * Trigger element to show/hide a list of options on mouse enter/leave.
 * The list is shown on mouse click or mouse enter and on mouse leave we wait
 * an amount of time before closing the dropdown if the user doesn't re-enter
 * the dropdown again.
 */
class Dropdown extends React.Component {
  constructor() {
    super(...arguments);
    this.state = { aboutToClose: false };
  }

  componentWillUnmount() {
    clearTimeout(this.closeTimeout);
  }

  render() {
    const {
      theme,
      sheet,
      classes,
      className,
      trigger,
      items,
      ...etc
    } = this.props;
    return (
      <div className={cx(classes.root, className)} {...etc}>
        <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
          <SimpleDropdown removeElement ref={el => (this.simpleDropdown = el)}>
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
      </div>
    );
  }

  onMouseEnter = () => {
    this.simpleDropdown.show();
    this.setState({ aboutToClose: false });
  };

  onMouseLeave = () => {
    this.setState({ aboutToClose: true });
    this.closeTimeout = setTimeout(this.tryToClose, 200);
  };

  tryToClose = () => {
    if (this.state.aboutToClose) {
      this.simpleDropdown.hide();
      this.setState({ aboutToClose: false });
    }
  };
}

Dropdown.propTypes = {
  /**
   * Element to show as a trigger for the dropdown.
   */
  trigger: PropTypes.any.isRequired,

  /**
   * List of menu options.
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      route: PropTypes.string
    })
  ).isRequired
};

export default withStyles(styles)(Dropdown);
