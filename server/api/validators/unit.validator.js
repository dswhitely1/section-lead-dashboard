const Validator = require('validator');
const isEmpty = require('./isEmpty');

function unitValidator(data) {
  const errors = {};
  data.name = !isEmpty(data.name) ? data.name : '';
  if (Validator.isEmpty(data.name)) {
    errors.name = 'Required';
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
}

module.exports = unitValidator;
