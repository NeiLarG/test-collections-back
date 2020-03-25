// const passport = require('passport');
const { check, validationResult } = require('express-validator');

const accountRepository = require('../repositories/account.repository');

module.exports.registration = async (req, res) => {
  await check('email').isEmail().withMessage('Email incorrect').run(req);
  await check('nickName').isLength({ min: 4 }).withMessage('Min length 4').run(req);
  await check('password').isLength({ min: 6 }).withMessage('Min length 6').run(req);
  await check('confirmPassword').equals(req.body.password).withMessage('Passwords are not equally').run(req);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  try {
    const account = await accountRepository.createAccount({
      email: req.body.email,
      password: req.body.password,
    });
    res.status(200).json(account);
  } catch (error) {
    res.status(400).json({ errors: [error] });
  }
};
