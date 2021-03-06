const { check, validationResult } = require('express-validator');

module.exports.createCollection = async (req, res, next) => {
  await check('name')
    .isLength({ min: 6, max: 45 })
    .withMessage('Min length - 6, max length - 45')
    .run(req);
  await check('description')
    .isLength({ min: 10, max: 255 })
    .withMessage('Min length - 10, max length - 255')
    .run(req);
  await check('idTopic')
    .exists()
    .withMessage('Id topic is required')
    .run(req);
  await check('idImage')
    .exists()
    .withMessage('Image is required')
    .run(req);
  await check('idPerson')
    .exists()
    .withMessage('Id person is required')
    .run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
  } else {
    next();
  }
};

module.exports.getCollectionsByPersonId = async (req, res, next) => {
  await check('idPerson')
    .exists()
    .withMessage('Id person is required')
    .run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
  } else {
    next();
  }
};

module.exports.deleteCollection = async (req, res, next) => {
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
