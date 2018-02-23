import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import cx from 'classnames';

import navigation from '../../../data/navigation.json';
import Button from '../../forms/Button';
import styles, { MENU_MOBILE_BODY_ACTIVE } from './styles';

class MenuMobile extends React.Component {

  constructor () {
    super(...arguments);
    this.state = { active: false };
  }

  render () {
    const { theme, sheet, classes, className, reversed, ...etc } = this.props;
    const { active } = this.state;
    const cls = cx(classes.root, active && classes.active, className);

    return (
      <div className={cls} {...etc}>
        <a className={classes.trigger} onClick={this.onTrigger}>
          <i className={classes.triggerLine}/>
          <i className={classes.triggerLine}/>
          <i className={classes.triggerLine}/>
        </a>
        <div className={classes.menuContainer}>
          <div className={classes.menu}>
            <Button href='/contact' fullWidth>Let's Talk</Button>

            {/* Navigations */}
            {navigation.map((nav, index) => (
              <div key={index}>
                <div className={classes.navTitle}>
                  <span className='text-primary'>_</span>{nav.name}
                </div>

                {/* List of links */}
                {nav.items.map((item, index2) => (
                  <Button
                    key={index2}
                    className={classes.navItem}
                    href={item.route}
                    palette={reversed ? 'primary' : 'black'}
                    fullWidth
                    outline
                  >
                    {item.name}
                  </Button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  onTrigger = () => {
    const active = !this.state.active;
    this.setState({ active });

    // Add/remove body class to remove scrolls according to the state.
    const baseClass = document.querySelector('body').getAttribute('class') || '';
    let updateClass = active
      ? `${baseClass} ${MENU_MOBILE_BODY_ACTIVE}`
      : baseClass.replace(MENU_MOBILE_BODY_ACTIVE, '').trim();
    document.querySelector('body').setAttribute('class', updateClass);

    // Set scroll to the top.
    const body = document.body;
    const html = document.documentElement;
    body.scrollTop = html.scrollTop = 0;
  }
}

MenuMobile.propTypes = {
  /**
   * Set theme with reversed colors.
   */
  reversed: PropTypes.bool,
};

export default withStyles(styles)(MenuMobile);
