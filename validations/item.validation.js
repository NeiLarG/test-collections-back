const { check, validationResult } = require('express-validator');

module.exports.createItem = async (req, res, next) => {
  await check('name')
    .isLength({ min: 1, max: 50 })
    .withMessage('Min length - 1, max length - 50')
    .run(req);
  await check('idCollection')
    .exists()
    .withMessage('Id collection is required')
    .run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
  } else {
    next();
  }
};

module.exports.getItemsByCollectionId = async (req, res, next) => {
  await check('idCollection')
    .exists()
    .withMessage('Id collection is required')
    .optional()
    .run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
  } else {
    next();
  }
};
