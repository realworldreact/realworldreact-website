import validate from 'validate.js';

const globalOptions = {
  format: 'getFirst'
};

validate.formatters.getFirst = errors => {
  const flatList = validate.flattenErrorsToArray(errors);
  if (flatList && flatList.length) {
    return flatList[0];
  }
  return false;
};

export const createValidator = (constraints, options) => ({
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
