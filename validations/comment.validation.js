const { check, validationResult } = require('express-validator');

module.exports.createComment = async (req, res, next) => {
  await check('text')
    .exists()
    .isLength({ min: 1, max: 255 })
    .withMessage('Min length - 1, max length - 255')
    .run(req);

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

module.exports.deleteComment = async (req, res, next) => {
  await check('id')
    .exists()
    .withMessage('Id is required')
    .run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
  } else {
    next();
  }
};
