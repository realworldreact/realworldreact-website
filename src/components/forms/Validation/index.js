import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    return this.props.children;
  }

  /**
   * Get if there are errors currently visible on UI.
   * @return {Boolean}
   */
  getCurrentErrors() {
    const { errors } = this.props.data;
    return !!Object.keys(errors).find(key => errors[key]);
  }

  /**
   * Validate a provided field.
   * @param  {String} name
   * @param  {Function} callback
   */
  validateField = (name, callback) => {
    const { data, validator } = this.props;
    let { dirties, errors, fields } = data;

    const error = validator.validateField(fields[name], name);
    dirties = { ...dirties, [name]: true };
    errors = { ...errors, [name]: error };

    this.props.onUpdate({ ...data, dirties, errors }, callback);
  };

  /**
   * Validate the whole form.
   * @param  {Function} callback
   */
  validate = callback => {
    const { data, validator } = this.props;

    const dirties = {};
    Object.keys(validator.constraints).forEach(key => {
      dirties[key] = true;
    });

    const errors = validator.validateForm(data.fields) || {};

    this.props.onUpdate({ ...data, dirties, errors }, callback);
  };

  /**
   * If user leaves a form field with changes, validate.
   * @param  {String} name
   */
  onBlur = name => {
    if (this.props.data.changed[name]) {
      this.validateField(name);
    }
  };

  /**
   * Update a form field with a new value.
   * @param  {String} name
   * @param  {String} value
   */
  onChange = (name, value) => {
    const changed = { ...this.props.data.changed, [name]: true };
    const fields = { ...this.props.data.fields, [name]: value };

    this.props.onUpdate({ ...this.props.data, changed, fields }, () => {
      if (this.props.data.dirties[name]) {
        this.validateField(name);
      }
    });
  };
}

Form.propTypes = {
  /**
   * Form data states.
   */
  data: PropTypes.shape({
    // Fields values.
    fields: PropTypes.object.isRequired,
    // If fields have been changed by the user.
    changed: PropTypes.object.isRequired,
    // If fields have been validated.
    dirties: PropTypes.object.isRequired,
    // Fields with errors.
    errors: PropTypes.object.isRequired
  }).isRequired,

  /**
   * Validator reference.
   */
  validator: PropTypes.any.isRequired,

  /**
   * Event handler to update form fields.
   */
  onUpdate: PropTypes.func.isRequired
};

export default Form;
