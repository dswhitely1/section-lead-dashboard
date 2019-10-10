const Validator = require('validator');
const isEmpty = require('./isEmpty');

function validateLoginInputs(data) {
  const errors = {};
  data.username = !isEmpty(data.username) ? data.username : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (Validator.isEmpty(data.username)) {
    errors.username = 'Required';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}

module.exports = validateLoginInputs;
