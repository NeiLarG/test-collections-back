const db = require('../models');

module.exports.createImage = async (image) => db.Image.create(image);
