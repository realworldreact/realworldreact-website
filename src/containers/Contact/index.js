import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import cx from 'classnames';

import {
  TextField,
  ErrorMsg,
  Button,
  Validation
} from '../../components/forms';
import styles from './styles';
import createValidator from './validator';

const validator = createValidator();

class Contact extends React.Component {
  constructor() {
    super(...arguments);

    // Initialize form fields as empty.
    const fields = {};
    Object.keys(validator.constraints).forEach(key => (fields[key] = ''));

    this.state = {
      data: {
        dirties: {},
        changed: {},
        errors: {},
        fields
      }
    };

    // Validation form ref.
    this.validation = null;
  }

  render() {
    const { theme, sheet, classes, className, palette, ...etc } = this.props;
    const cls = cx(classes.root, className, 'row');

    const { data } = this.state;

    // Make validated and controlled dynamic fields.
    const makeField = (name, props) => (
      <TextField
        reversed
        className={classes.input}
        palette={palette}
        {...props}
        errorText={data.errors[name]}
        value={data.fields[name]}
        onChange={ev => this.validation.onChange(name, ev.target.value)}
        onBlur={() => this.validation.onBlur(name)}
      />
    );

    return (
      <Validation
        ref={el => (this.validation = el)}
        data={data}
        validator={validator}
        onUpdate={this.onUpdate}
      >
        <form className={cls} {...etc} onSubmit={this.onSubmit}>
          <div className="col-xs-12">
            <div className={classes.heading}>
              <h2>
                Ask a question, get started with our services, or simply{' '}
                <span className="text-inverted background-secondary">
                  &nbsp;say hi.&nbsp;
                </span>
              </h2>
              <div className={classes.required}>* = required field</div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4">
            {makeField('name', { placeholder: 'Name*' })}
            {makeField('company', { placeholder: 'Company*' })}
            {makeField('email', { placeholder: 'Email*', type: 'email' })}
            {makeField('phone', { placeholder: 'Phone*' })}
          </div>
          <div className="col-xs-12 col-sm-8">
            <TextField
              reversed
              isTextarea
              placeholder="Message*"
              palette={palette}
              fieldProps={{
                className: classes.textArea
              }}
              value={data.fields.message}
              onChange={ev =>
                this.validation.onChange('message', ev.target.value)
              }
              onBlur={() => this.validation.onBlur('message')}
            />
            <div className={classes.button}>
              <Button
                showArrow
                textAlign="left"
                palette="black"
                children="Submit"
                onClick={this.onSubmit}
              />
            </div>
            {!!data.errors.message && (
              <ErrorMsg>{data.errors.message}</ErrorMsg>
            )}
          </div>
        </form>
      </Validation>
    );
  }

  onUpdate = (data, callback) => {
    this.setState({ data }, callback);
  };

  onSubmit = ev => {
    ev.preventDefault();
    this.validation.validate(() => {
      if (!this.validation.getCurrentErrors()) {
        // TODO:
        console.log('fields', this.state.data.fields);
      }
    });
  };
}

Contact.propTypes = {
  /**
   * Color palette for content text and inputs.
   */
  palette: PropTypes.oneOf(['primary', 'secondary', 'text', 'black'])
};

Contact.defaultProps = {
  palette: 'primary'
};

export default withStyles(styles)(Contact);
