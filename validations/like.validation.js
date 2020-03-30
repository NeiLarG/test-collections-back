const { check, validationResult } = require('express-validator');

module.exports.createLike = async (req, res, next) => {
  await check('idItem')
    .exists()
    .withMessage('Id item is required')
    .run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
  } else {
    next();
  }
};

module.exports.deleteLike = async (req, res, next) => {
  await check('idItem')
    .exists()
    .withMessage('Id item is required')
    .run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
  } else {
    next();
  }
};
