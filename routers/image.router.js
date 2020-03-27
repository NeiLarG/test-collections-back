const express = require('express');
const Multer = require('multer');

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

const controller = require('../controllers/image.controller');

const router = express.Router();

router.route('/upload')
  .post(multer.single('picture'), controller.uploadImage);

module.exports = router;
