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
    const {
      theme,
      sheet,
      classes,
      className,
      children,
      border,
      ...etc
    } = this.props;
    const { activeTab } = this.state;

    const activeItem = children[activeTab];
    const nextTab = activeTab >= children.length - 1 ? 0 : activeTab + 1;
    const nextItem = children[nextTab];

    return (
      <div className={cx(classes.root, className)} {...etc}>
        <div className="container" ref={el => (this.containerEl = el)}>
          <div className="row">
            {/* OPTIONS */}
            <div className={cx(classes.options, 'col-xs-12 col-sm-4 last-sm')}>
              {children.map((item, index) => (
                <div
                  key={index}
                  className={cx(
                    classes.optionContainer,
                    activeTab > index && classes.optionContainerDisabled,
                    activeTab === index && classes.optionContainerActive
                  )}
                  onClick={() => this.onTabChange(index)}
                >
                  <div
                    className={cx(
                      classes.option,
                      item.optionImage && classes.optionWithImage
                    )}
                  >
                    <Option className={classes.optionLink}>{item.name}</Option>
                    {!!classes.optionImage && (
                      <div
                        className={classes.optionImage}
                        style={{ backgroundImage: `url(${item.optionImage})` }}
                      />
                    )}
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

                  {/* TODO: Support mobile buttons with only one option to go
                    the the next item with `href` is not provided. */}
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
                      palette="text"
                      textAlign="left"
                      showArrow
                      href={activeItem.href}
                      onClick={
                        !activeItem.href
                          ? () => this.onTabChange(nextTab)
                          : null
                      }
                    >
                      {activeItem.href
                        ? activeItem.enterText
                        : `Up Next: ${nextItem.name}`}
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

    // If user is on mobile, scroll to the container beginning.
    if (window.screen.width < 768) {
      const box = this.containerEl.getBoundingClientRect();
      const currentTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const top = box.top + currentTop;
      document.documentElement.scrollTop = document.body.scrollTop = top;
    }
  };
}

Tabs.propTypes = {
  /**
   * If tab content should have border on desktop.
   */
  border: PropTypes.bool,

  /**
   * Tabs items definitions.
   */
  children: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string,
      content: PropTypes.any.isRequired,
      optionImage: PropTypes.string,
      enterText: PropTypes.string
    })
  )
};

export default withStyles(styles)(Tabs);
