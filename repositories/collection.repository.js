const db = require('../models');

module.exports.createCollection = async (collection) => db.Collection.create(collection);

module.exports.getCollections = async (options) => db.Collection.findAll(options);
