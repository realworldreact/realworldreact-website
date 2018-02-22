import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import cx from 'classnames';
import navItems from '../../../data/navItems.json';
import {Button, BUTTON_CLASSES} from '../../forms'

import styles from './styles';

class MenuMobile extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      active: false
    }
  }
  triggerHandler = () => {
    this.setState({
      active: !this.state.active
    })
  };
  render () {
    const { classes, className, inverted } = this.props;
    const triggerBtn = cx(classes.trigger, {active: this.state.active});
    const menuArea = cx(classes.menuItemsContainer, {active: this.state.active});
    const menuItemTitle = cx(classes.navTitle, 'underscore-title');
    const menuItem = cx(classes.navItem);
    return (
      <div className={cx(classes.root, className)}>
        <a className={triggerBtn} onClick={this.triggerHandler}>
          <i className={cx('line')}/>
          <i className={cx('line')}/>
          <i className={cx('line')}/>
        </a>
        <div className={menuArea}>
          <div className={cx('navItems')}>
            <Button text='Let`s Talk'
                    fullWidthButton
                    buttonUrl='/contact'
                    buttonStyle={BUTTON_CLASSES.PRIMARY_BUTTON}/>
            {navItems.map((item, key) => {
              return ([
                <div key={key} className={menuItemTitle}>
                  {item.name}
                </div>,
                item.items.map((navItem, key) => {
                  return <div key={key} className={menuItem}>
                    <Button text={navItem.name}
                            fullWidthButton
                            buttonUrl={navItem.route}
                            buttonStyle={BUTTON_CLASSES.OUTLINE_BUTTON_INVERSE}/>
                  </div>
                })
              ])
            })}
          </div>
        </div>
      </div>
    );
  };
}

MenuMobile.propTypes = {
  /**
   * Set theme with inverted colors.
   */
  inverted: PropTypes.bool,
};

export default withStyles(styles)(MenuMobile);
