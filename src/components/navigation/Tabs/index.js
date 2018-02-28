import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import cx from 'classnames';

import Option from '../../forms/Option';
import Button from '../../forms/Button';
import styles from './styles';

class Tabs extends React.Component {
  constructor() {
    super(...arguments);
    this.state = { activeTab: 0 };
  }

  render() {
    const { theme, sheet, classes, className, children, ...etc } = this.props;
    const { activeTab } = this.state;

    const activeItem = children[activeTab];
    const nextTab = activeTab >= children.length - 1 ? 0 : activeTab + 1;
    const nextItem = children[nextTab];

    return (
      <div className={cx(classes.root, className)} {...etc}>
        <div className="container">
          <div className="row">
            {/* OPTIONS */}
            <div className={cx(classes.options, 'col-xs-12 col-sm-4 last-sm')}>
              {children.map((item, index) => (
                <div
                  key={index}
                  className={cx(
                    classes.optionContainer,
                    activeTab > index && classes.optionContainerInactive
                  )}
                >
                  <div
                    className={cx(
                      classes.option,
                      activeTab === index && classes.optionActive
                    )}
                  >
                    <Option
                      className={classes.optionLink}
                      onClick={() => this.onTabChange(index)}
                    >
                      {item.name}
                    </Option>
                  </div>
                </div>
              ))}
            </div>

            {/* TABS */}
            <div className={cx(classes.tabs, 'col-xs-12 col-sm-8')}>
              <div className={classes.tabsContent}>
                <div className={classes.tabsItem}>
                  <div className={classes.tabsItemContent}>
                    {activeItem.content}
                  </div>

                  <div className={cx(classes.buttons, classes.onSmall)}>
                    <div className={classes.buttonsEnter}>
                      <Button
                        className={classes.buttonsItem}
                        href={activeItem.href}
                        palette="black"
                        textAlign="left"
                        outline
                        showArrow
                      >
                        {activeItem.enterText}
                      </Button>
                    </div>
                    <div className={classes.buttonsNext}>
                      <Button
                        className={classes.buttonsItem}
                        palette="text"
                        textAlign="left"
                        showArrow
                        onClick={() => this.onTabChange(nextTab)}
                      >
                        Up Next: {nextItem.name}
                      </Button>
                    </div>
                  </div>

                  <div className={cx(classes.buttons, classes.onMedium)}>
                    <Button
                      className={classes.buttonsItem}
                      href={activeItem.href}
                      palette="text"
                      textAlign="left"
                      showArrow
                    >
                      {activeItem.enterText}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  onTabChange = activeTab => {
    this.setState({ activeTab });
  };
}

Tabs.propTypes = {
  /**
   * Tabs items definitions.
   */
  children: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string,
      enterText: PropTypes.string,
      content: PropTypes.any.isRequired
    })
  )
};

export default withStyles(styles)(Tabs);
