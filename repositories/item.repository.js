const Item = require('../models/Item');
const Collection = require('../models/Collection');

module.exports.createItem = async (item) => Item.create(item);

module.exports.getItemsByCollectionId = async (idCollection, options) => {
  const collection = await Collection.findByPk(idCollection);
  if (!collection) {
    throw 'Collection is not founded';
  }
  return Item.findAll(options);
};
