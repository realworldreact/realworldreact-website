import React from 'react';
import withStyles from 'react-jss';
import cx from 'classnames';

import imagePatternOrbit from '../../assets/images/patterns/orbit.png';
import imageProblem from '../../assets/images/home/problem.png';
import imageSolution from '../../assets/images/home/solution.png';
import imageBenefits from '../../assets/images/home/benefits.png';
import { ImageText, Option } from '../../components';
import HomeButton from './_button';

const styles = theme => ({
  root: {
    position: 'relative',
    padding: [20, 0]
  },
  background: {
    position: 'relative',
    zIndex: 1,
    display: 'none',
    width: '100%',
    userSelect: 'none'
  },
  content: {
    zIndex: 2,
    width: '100%',
    padding: [0, 20]
  },
  heading: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 20
  },
  title: {
    display: 'block',
    overflow: 'hidden',
    marginLeft: 'auto',
    width: '100%',
    height: 80,
    fontSize: 80,
    fontWeight: 'bold',
    lineHeight: '1',
    textAlign: 'justify',
    textTransform: 'uppercase',
    '&:after': {
      content: '""',
      display: 'inline-block',
      width: '100%'
    }
  },

  // Tabs
  tabs: {
    //
  },
  tabsContent: {
    borderStyle: 'solid',
    borderColor: theme.palette.primary.base,
    borderWidth: '0 2px'
  },
  tabsItem: {
    //
  },
  tabsItemContent: {
    padding: 20
  },
  imageText: {
    '& + &': {
      marginTop: 20
    }
  },

  // Options
  options: {
    //
  },
  optionContainer: {
    position: 'relative',
    padding: [0, 10, 10],
    borderStyle: 'solid',
    borderColor: theme.palette.primary.base,
    borderWidth: '0 2px'
  },
  optionContainerInactive: {
    border: 'none'
  },
  option: {
    transition: 'background-color 200ms ease-out'
  },
  optionLink: {
    //
  },
  optionActive: {
    backgroundColor: theme.palette.primary.base,
    '&:before, &:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      width: 12,
      height: 18,
      backgroundColor: '#fff',
      borderBottom: '2px solid ' + theme.palette.primary.base
    },
    '&:before': {
      left: -2
    },
    '&:after': {
      right: -2
    },
    '& $optionLink': {
      borderColor: 'transparent',
      backgroundColor: 'transparent',
      color: '#fff'
    }
  },

  // Buttons
  buttons: {
    //
  },
  buttonsItem: {
    padding: [0, 10]
  },
  buttonsEnter: {
    position: 'relative',
    '& $buttonsItem': {
      '&:before, &:after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        bottom: 0,
        width: 12,
        height: 18,
        backgroundColor: '#fff',
        borderTop: '2px solid ' + theme.palette.primary.base
      },
      '&:before': {
        left: -2
      },
      '&:after': {
        right: -2
      }
    }
  },
  buttonsNext: {
    position: 'relative',
    marginTop: 10,
    '& $buttonsItem': {
      '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: -10,
        left: -2,
        right: -2,
        height: '130%',
        backgroundColor: '#fff'
      }
    }
  },

  // Utils
  onMedium: {
    display: 'none'
  },
  onSmall: {
    //
  },

  // extra small +
  '@media screen and (min-width: 30em)': {
    title: {
      width: 320,
      height: 100,
      fontSize: 100
    }
  },

  // medium +
  '@media screen and (min-width: 64em)': {
    onMedium: {
      display: 'block'
    },
    onSmall: {
      display: 'none'
    },

    background: {
      display: 'block',
      // The min height the `content` can take. For smaller screens the
      // background may not take the min height for the content to appear.
      minHeight: 750
    },
    content: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)'
    },

    // Tabs
    tabs: {
      padding: 0,
      backgroundColor: '#fff',
      borderRight: '2px solid ' + theme.palette.primary.base
    },
    tabsContent: {
      border: 'none'
    },
    tabsItemContent: {
      padding: 40
    },

    // Options
    options: {
      marginLeft: -2,
      border: 'none',
      paddingLeft: 0
    },
    optionContainer: {
      border: 'none',
      padding: [0, 0, 10]
    },
    optionContainerInactive: {
      backgroundColor: '#fff'
    },
    option: {
      padding: [0, 20]
    },
    optionActive: {
      '&:before, &:after': {
        display: 'none'
      }
    },

    // Buttons
    buttons: {
      padding: 0
    }
  }
});

class HomeServices extends React.Component {
  constructor() {
    super(...arguments);
    this.state = { activeTab: 0 };
  }

  render() {
    const { classes } = this.props;
    const { activeTab } = this.state;

    return (
      <div className={classes.root}>
        <img className={classes.background} src={imagePatternOrbit} />
        <div className={classes.content}>
          <div className="container">
            <div className="row">
              <div className={cx(classes.heading, 'col-xs-12')}>
                <div className={classes.title}>S E R V</div>
                <div className={classes.title}>I C E S</div>
              </div>
            </div>

            <div className="row">
              {/* OPTIONS */}
              <div
                className={cx(classes.options, 'col-xs-12 col-sm-4 last-sm')}
              >
                <div
                  className={cx(
                    classes.optionContainer,
                    activeTab > 0 && classes.optionContainerInactive
                  )}
                >
                  <div
                    className={cx(
                      classes.option,
                      activeTab === 0 && classes.optionActive
                    )}
                  >
                    <Option
                      className={classes.optionLink}
                      onClick={() => this.onTabChange(0)}
                    >
                      Training
                    </Option>
                  </div>
                </div>
                <div
                  className={cx(
                    classes.optionContainer,
                    activeTab > 1 && classes.optionContainerInactive
                  )}
                >
                  <div
                    className={cx(
                      classes.option,
                      activeTab === 1 && classes.optionActive
                    )}
                  >
                    <Option
                      className={classes.optionLink}
                      onClick={() => this.onTabChange(1)}
                    >
                      Consulting
                    </Option>
                  </div>
                </div>
                <div
                  className={cx(
                    classes.optionContainer,
                    activeTab > 2 && classes.optionContainerInactive
                  )}
                >
                  <div
                    className={cx(
                      classes.option,
                      activeTab === 2 && classes.optionActive
                    )}
                  >
                    <Option
                      className={classes.optionLink}
                      onClick={() => this.onTabChange(2)}
                    >
                      Remote Placement
                    </Option>
                  </div>
                </div>
                <div
                  className={cx(
                    classes.optionContainer,
                    activeTab > 3 && classes.optionContainerInactive
                  )}
                >
                  <div
                    className={cx(
                      classes.option,
                      activeTab === 3 && classes.optionActive
                    )}
                  >
                    <Option
                      className={classes.optionLink}
                      onClick={() => this.onTabChange(3)}
                    >
                      Engineering Retreats
                    </Option>
                  </div>
                </div>
              </div>

              {/* TABS */}
              <div className={cx(classes.tabs, 'col-xs-12 col-sm-8')}>
                <div className={classes.tabsContent}>
                  {/* TAB 0 */}
                  {activeTab === 0 && (
                    <div className={classes.tabsItem}>
                      <div className={classes.tabsItemContent}>
                        <ImageText
                          className={classes.imageText}
                          image={imageProblem}
                          subtitle="Problem"
                          stackOnMobile
                        >
                          We believe that learning a new technology should
                          increase your productivity, not decrease it. Yet
                          oftentimes we spend days, weeks, or sometimes months
                          coming to grips with a new technology that promises to
                          deliver something that we may never fully achieve.
                          Oftentimes we waste a lot of time just figuring stuff
                          out, or worse - we're stuck with sunk costs, project
                          fragmentation, and technical debt.
                        </ImageText>
                        <ImageText
                          className={classes.imageText}
                          image={imageSolution}
                          subtitle="Solution"
                          stackOnMobile
                        >
                          We believe there's a better way. Our battle-tested
                          curriculum will send your engineers through a
                          hyperloop of productivity. Our instructors are
                          full-time developers who have been using their
                          respective technologies for years, and continue to
                          code with them every day. They also have years of
                          experience training engineers to learn moderm
                          development tools like React and Redux.
                        </ImageText>
                        <ImageText
                          className={classes.imageText}
                          image={imageBenefits}
                          subtitle="Benefit"
                          stackOnMobile
                        >
                          There is no better way to learn a new technology than
                          a professionally-instructed, in person workshop.
                        </ImageText>
                      </div>

                      <div className={cx(classes.buttons, classes.onSmall)}>
                        <div className={classes.buttonsEnter}>
                          <HomeButton
                            className={classes.buttonsItem}
                            href="/training"
                            outline
                            palette="black"
                          >
                            Learn more about training
                          </HomeButton>
                        </div>
                        <div className={classes.buttonsNext}>
                          <HomeButton
                            className={classes.buttonsItem}
                            onClick={() => this.onTabChange(1)}
                          >
                            Up Next: Consulting
                          </HomeButton>
                        </div>
                      </div>

                      <div className={cx(classes.buttons, classes.onMedium)}>
                        <HomeButton href="/training">
                          Learn more about training
                        </HomeButton>
                      </div>
                    </div>
                  )}

                  {/* TAB 1 */}
                  {activeTab === 1 && (
                    <div className={classes.tabsItem}>
                      <div className={classes.tabsItemContent}>
                        <p>Consulting</p>
                      </div>
                    </div>
                  )}

                  {/* TAB 2 */}
                  {activeTab === 2 && (
                    <div className={classes.tabsItem}>
                      <div className={classes.tabsItemContent}>
                        <p>Remote Placement</p>
                      </div>
                    </div>
                  )}

                  {/* TAB 3 */}
                  {activeTab === 3 && (
                    <div className={classes.tabsItem}>
                      <div className={classes.tabsItemContent}>
                        <p>Engineering Retreats</p>
                      </div>
                    </div>
                  )}
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

export default withStyles(styles)(HomeServices);
