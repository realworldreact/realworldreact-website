import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import cx from 'classnames';

import styles from './styles';
import { Validation, TextField, Button } from '../../components/forms';
import { createValidator } from '../../tools';

const validator = createValidator({
  email: {
    email: { message: 'A valid email address is required.' }
  }
});

class SignUp extends React.Component {
  constructor() {
    super(...arguments);

    this.state = {
      data: {
        fields: { email: '' },
        dirties: {},
        changed: {},
        errors: {}
      }
    };

    // Validation form ref.
    this.validation = null;
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
    const { data } = this.state;
    return (
      <Validation
        ref={el => (this.validation = el)}
        data={data}
        validator={validator}
        onUpdate={this.onUpdate}
      >
        <form
          className={cls}
          {...etc}
          noValidate
          onSubmit={this.onSubmit}
          name="signup"
          method="POST"
          data-netlify="true"
        >
          <div className={classes.title}>
            <span className="text-primary">_</span>
            <strong>{title}</strong>
          </div>
          <div className={classes.description}>{description}</div>
          <TextField
            reversed={reversed}
            palette={palette}
            name="email"
            type="email"
            placeholder="Email"
            errorText={data.errors.email}
            value={data.fields.email}
            onBlur={() => this.validation.onBlur('email')}
            onChange={ev => this.validation.onChange('email', ev.target.value)}
          />
          <div className={classes.button}>
            <Button textAlign="left" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Validation>
    );
  }

  onUpdate = (data, callback) => {
    this.setState({ data }, callback);
  };

  onSubmit = ev => {
    const formHasErrors = this.validation.getValidityForm();
    if (formHasErrors) {
      ev.preventDefault();
      this.validation.validate();
      return;
    }
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
