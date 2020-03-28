const express = require('express');

const controller = require('../controllers/item.controller');
const validation = require('../validations/item.validation');
const { isAuthenticated } = require('../config/passport');

const router = express.Router();

router.route('/')
  .post(isAuthenticated, validation.createItem, controller.createItem)
  .get(isAuthenticated, validation.getItemsByCollectionId, controller.getItemsByCollectionId);

module.exports = router;
