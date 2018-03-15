import { createValidator } from '../../tools';

const constraints = {
  name: {
    presence: { message: 'Name field is required.' },
    length: { minimum: 2, maximum: 256, message: 'A valid name is required.' }
  },
  company: {
    presence: { message: 'Company name field is required.' },
    length: {
      minimum: 2,
      maximum: 256,
      message: 'A valid company name is required.'
    }
  },
  email: {
    email: { message: 'A valid email address is required.' }
  },
  phone: {
    presence: { message: 'Phone number field is required.' },
    length: {
      minimum: 3,
      maximum: 32,
      message: 'A valid phone number is required.'
    }
  },
  message: {
    presence: { message: 'The message field is required.' },
    length: {
      minimum: 2,
      maximum: 2048,
      message: 'A valid message is required.'
    }
  }
};

export default () => createValidator(constraints);
