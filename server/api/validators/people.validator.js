const Validator = require('validator');
const isEmpty = require('./isEmpty');

function peopleValidator(data) {
  const errors = {};
  data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
  data.lastName = !isEmpty(data.lastName) ? data.lastName : '';

  if (!Validator.isLength(data.firstName, { min: 2, max: 30 })) {
    errors.firstName = 'First Name must be between 2 and 30 characters';
  }
  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = 'Required';
  }
  if (!Validator.isLength(data.lastName, { min: 2, max: 30 })) {
    errors.lastName = 'Last Name must be between 2 and 30 characters';
  }
  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = 'Required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}

module.exports = peopleValidator;
