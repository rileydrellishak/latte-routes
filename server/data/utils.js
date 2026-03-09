const numLengthValidator = (value, length) => {
  if (String(value).length !== length) {
    throw new Error('value is not valid length');
  }
}

export default numLengthValidator