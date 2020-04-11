const validateRegisterInput = ({
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
}) => {
  const errors = {}
  if (firstName.trim() === '') {
    errors.firstName = 'First name must not be empty'
  }

  if (lastName.trim() === '') {
    errors.lastName = 'Last name must not be empty'
  }

  if (email.trim() === '') {
    errors.email = 'Email must not be empty'
  } else {
    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/
    if (!email.match(regEx)) {
      errors.email = 'Email must be a valid email address'
    }
  }

  if (password === '') {
    errors.password = 'Password must not be empty'
  } else if (password !== confirmPassword) {
    errors.confirmPassword = 'Passwords must match'
  }

  return {
    errors,
    isValid: Object.keys(errors).length < 1,
  }
}

module.exports = {
  validateRegisterInput,
}