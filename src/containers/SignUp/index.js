import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import cx from 'classnames';

import styles from './styles';
import { TextField, Button } from '../../components/forms';
import { createValidator } from '../../tools';

const validator = createValidator({
  Email: {
    email: { message: 'A valid email address is required.' }
  }
});

class SignUp extends React.Component {
  constructor() {
    super(...arguments);
    this.state = { dirty: false, error: '', value: '' };
  }

  render() {
    const {
      theme,
      sheet,
      classes,
      className,
      title,
      reversed,
      palette,
      description,
      ...etc
    } = this.props;
    const cls = cx(classes.root, className);
    const { error, value } = this.state;
    return (
      <div className={cls} {...etc}>
        <div className={classes.title}>
          <span className="text-primary">_</span>
          <strong>{title}</strong>
        </div>
        <div className={classes.description}>{description}</div>
        <TextField
          reversed={reversed}
          palette={palette}
          type="email"
          placeholder="Email"
          value={value}
          onBlur={() => this.validate()}
          onChange={this.onChange}
        />
        {!!error && <div className={classes.errorMsg}>{error}</div>}
        <div className={classes.button}>
          <Button textAlign="left" children="Submit" onClick={this.onSubmit} />
        </div>
      </div>
    );
  }

  validate = callback => {
    const error = validator.validateField(this.state.value, 'Email');
    this.setState({ dirty: true, error }, callback);
  };

  onChange = ev => {
    const value = ev.target.value;
    this.setState({ value }, () => {
      if (this.state.dirty) {
        this.validate();
      }
    });
  };

  onSubmit = ev => {
    ev.preventDefault();
    this.validate(() => {
      if (!this.state.error) {
        // TODO: Connect with Netlify.
      }
    });
  };
}

SignUp.propTypes = {
  /**
   * If the palette color is reversed.
   */
  reversed: PropTypes.bool,

  /**
   * Title text.
   */
  title: PropTypes.string.isRequired,

  /**
   * Description text.
   */
  description: PropTypes.string.isRequired,

  /**
   * Color palette for title and inputs.
   */
  palette: PropTypes.oneOf([
    'primary',
    'secondary',
    'text',
    'inverted',
    'black'
  ])
};

SignUp.defaultProps = {
  reversed: true,
  palette: 'primary',
  title: 'Stay in touch',
  description:
    'Stay up to date with the latest talks, videos, and events with our (non-spammy) newsletter.'
};

export default withStyles(styles)(SignUp);
