import React from 'react';
import PropTypes from 'prop-types';
import { navigateTo } from "gatsby-link"
import withStyles from 'react-jss';
import cx from 'classnames';

import styles from './styles';

export const BUTTON_CLASSES = {
  PRIMARY_BUTTON: 'primaryButton',
  OUTLINE_BUTTON: 'outlineButton',
  OUTLINE_BUTTON_INVERSE: 'outlineButtonInverse',
};

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeAction: false
    }
  }
  handlerAction = () => {
    const { buttonUrl, buttonAction} = this.props;
    if (!this.state.activeAction) {
      this.setState({
        activeAction: true
      }, () => {
        setTimeout(() => {
          if (buttonUrl) {
            navigateTo(buttonUrl);
          } else {
            buttonAction();
            this.setState({
              activeAction: false
            })
          }
        }, 600)
      } );
    }
  };
  render() {
    const { classes, text, buttonStyle, fullWidthButton } = this.props;
    const buttonClass = cx(
      classes[buttonStyle],
      classes.juystifyButton, {active: this.state.activeAction}
      );
    return (
      <a onClick={this.handlerAction}
         className={buttonClass}>
        {text}
      </a>
    );
  }
};

Button.propTypes = {
  fullWidthButton: PropTypes.bool,
  text: PropTypes.string,
  buttonStyle: PropTypes.string,
  buttonUrl: PropTypes.string,
  buttonAction: PropTypes.func,
};

Button.defaultProps = {
  fullWidthButton: false
}

export default withStyles(styles)(Button);
