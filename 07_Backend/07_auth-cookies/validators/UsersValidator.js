const { celebrate, Joi, Segments } = require('celebrate');

const createUser = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,12}$/) //1 letra + 1 dígito + 1 caracter especial
      .required()
  })
});

module.exports = { createUser };