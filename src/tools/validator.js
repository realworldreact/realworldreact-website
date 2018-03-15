import validate from 'validate.js';

const globalOptions = {
  format: 'getFirst'
};

validate.formatters.getFirst = errors => {
  const formatted = {};
  errors.forEach(err => {
    formatted[err.attribute] = err.options.message || err.error;
  });
  return formatted;
};

export const createValidator = (constraints, options) => ({
  constraints,

  validateForm: (dataMap, customOptions) => {
    return validate(dataMap, constraints, {
      ...globalOptions,
      ...options,
      ...customOptions
    });
  },

  validateField: (value, name, customOptions) => {
    const errors = validate.single(value, constraints[name], {
      ...globalOptions,
      ...options,
      ...customOptions
    });
    return !!errors && errors[0];
  }
});
