import { startCase } from 'lodash';
import isEmail from 'validator/lib/isEmail';

class AppValidator {
  static checkRequired({ name, value }) {
    return !value
      ? `The ${startCase(name)} field is required`
      : '';
  }

  static checkLength({ name, value }, min, max) {
    return value.length < min || value.length > max
      ? `The ${startCase(name)} shall not be less than ${min} but not more than ${max} characters`
      : '';
  }

  static checkEmail({ value }) {
    return !isEmail(value)
      ? 'Incorrect email address'
      : '';
  }
}

export default AppValidator;
