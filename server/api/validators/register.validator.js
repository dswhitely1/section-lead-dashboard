const Validator = require('validator');
const isEmpty = require('./isEmpty');

function validateRegisterInputs(data) {
  const errors = {};
  data.username = !isEmpty(data.username) ? data.username : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';
  if (!Validator.isLength(data.username, { min: 2, max: 30 })) {
    errors.username = 'Username must be between 2 and 30 characters';
  }
  if (Validator.isEmpty(data.username)) {
    errors.username = 'Required';
  }
  if (!Validator.isLength(data.password, { min: 2, max: 20 })) {
    errors.password = 'Username must be between 2 and 20 characters';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Required';
  }
  if (data.password !== data.password2) {
    errors.password2 = 'Passwords must match';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}

module.exports = validateRegisterInputs;
