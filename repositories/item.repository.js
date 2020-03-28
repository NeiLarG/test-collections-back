const db = require('../models');

module.exports.createItem = async (item) => db.Item.create(item);

module.exports.getItemsByCollectionId = async (idCollection) => {
  const collection = await db.Collection.findByPk(idCollection);
  if (!collection) {
    throw 'Collection is not founded';
  }
  return db.Item.findAll({ where: { idCollection } });
};
