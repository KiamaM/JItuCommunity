import Joi from 'joi'

const customEmailValidator = Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net'] }
  }).custom((value: string, helpers: Joi.CustomHelpers) => {
    if (!value.endsWith('@theJitu.com')) {
      return helpers.error('any.invalid');
    }
    return value;
  }).message('"{#label}" must be a valid company email address');
  
  const schema = Joi.object({
    email: customEmailValidator.required()
  });
  
  const data = { email: 'us.com' };
  const result = schema.validate(data);
  
  if (result.error) {
    console.error(result.error.details[0].message);
  } else {
    console.log('Validation passed:', result.value);
  }







  