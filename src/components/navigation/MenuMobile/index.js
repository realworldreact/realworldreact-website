import React from 'react';
import PropTypes from 'prop-types';
import { navigateTo } from 'gatsby-link';
import withStyles from 'react-jss';
import cx from 'classnames';

import navigation from '../../../data/navigation.json';
import Button from '../../forms/Button';
import styles, {
  MENU_MOBILE_BODY_ACTIVE,
  MENU_MOBILE_ANIM_TIME
} from './styles';

class MenuMobile extends React.Component {
  constructor() {
    super(...arguments);
    this.state = { active: false };
  }

  componentWilUnmount() {
    this.removeBodyActiveClass();
  }

  render() {
    const { theme, sheet, classes, className, reversed, ...etc } = this.props;
    const { active } = this.state;
    const cls = cx(classes.root, active && classes.active, className);

    return (
      <div className={cls} {...etc}>
        <a className={classes.trigger} onClick={this.onTrigger}>
          <i className={classes.triggerLine} />
          <i className={classes.triggerLine} />
          <i className={classes.triggerLine} />
        </a>
        <div className={classes.menuContainer}>
          <div className={classes.menu}>
            <Button
              className={classes.menuMainButton}
              onClick={() => this.onOption('/contact')}
            >
              Let's Talk
            </Button>
            <Button
              className={classes.menuMainButton}
              outline
              palette={reversed ? 'primary' : 'black'}
              onClick={() => this.onOption('/')}
            >
              Home
            </Button>

            {/* Navigations */}
            {navigation.map((nav, index) => (
              <div key={index}>
                <div className={classes.navTitle}>
                  <span className="text-primary">_</span>
                  {nav.name}
                </div>

                {/* List of links */}
                {nav.items.map((item, index2) => (
                  <Button
                    key={index2}
                    className={classes.navItem}
                    palette={reversed ? 'primary' : 'black'}
                    outline
                    onClick={() => this.onOption(item.route)}
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
    this.toggleBodyActiveClass(active);

    // Set scroll to the top.
    const body = document.body;
    const html = document.documentElement;
    body.scrollTop = html.scrollTop = 0;
  };

  onOption = route => {
    this.removeBodyActiveClass();
    this.setState({ active: false });

    // Allow the user to close the menu before URL changes.
    setTimeout(() => {
      if (/^https?\:\/\//.test(route)) {
        window.open(route, '_blank');
      } else {
        navigateTo(route);
      }
    }, MENU_MOBILE_ANIM_TIME);
  };

  addBodyActiveClass = () => {
    const baseClass =
      document.querySelector('body').getAttribute('class') || '';
    let updateClass = `${baseClass} ${MENU_MOBILE_BODY_ACTIVE}`.trim();
    document.querySelector('body').setAttribute('class', updateClass);
  };

  removeBodyActiveClass = () => {
    const baseClass =
      document.querySelector('body').getAttribute('class') || '';
    let updateClass = baseClass.replace(MENU_MOBILE_BODY_ACTIVE, '').trim();
    document.querySelector('body').setAttribute('class', updateClass);
  };

  toggleBodyActiveClass = add => {
    if (add) {
      this.addBodyActiveClass();
    } else {
      this.removeBodyActiveClass();
    }
  };
}

MenuMobile.propTypes = {
  /**
   * Set theme with reversed colors.
   */
  reversed: PropTypes.bool
};

export default withStyles(styles)(MenuMobile);
