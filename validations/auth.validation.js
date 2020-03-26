const { check, validationResult } = require('express-validator');

module.exports.registration = async (req, res, next) => {
  await check('email')
    .isEmail()
    .withMessage('Email incorrect')
    .run(req);
  await check('nickName')
    .isLength({ min: 4 })
    .withMessage('Min length 4')
    .run(req);
  await check('password')
    .isLength({ min: 6 })
    .withMessage('Min length 6')
    .run(req);
  await check('confirmPassword')
    .equals(req.body.password)
    .withMessage('Passwords are not equally')
    .run(req);
  await check('birthDate')
    .isISO8601()
    .toDate()
    .withMessage('Check date format "yyyy-mm-dd"')
    .run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
  } else {
    next();
  }
};

module.exports.login = async (req, res, next) => {
  await check('email')
    .isEmail()
    .withMessage('Email incorrect')
    .run(req);
  await check('password')
    .isLength({ min: 6 })
    .withMessage('Min length 6')
    .run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
  } else {
    next();
  }
};
