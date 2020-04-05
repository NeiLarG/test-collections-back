const Collection = require('../models/Collection');
const Person = require('../models/Person');

module.exports.getAllCollections = async (options) => Collection.findAll(options);

module.exports.createCollection = async (collection) => Collection.create(collection);

module.exports.getCollectionsByPersonId = async (idPerson) => {
  const person = await Person.findByPk(idPerson);
  if (!person) {
    throw 'Person is not founded';
  }
  return Collection.findAll({ where: { idPerson } });
};

module.exports.deleteCollection = async (id, idPerson) => {
  const result = await Collection.findByPk(id);
  if (!result) {
    throw 'Collection is not found';
  }
  if (result.idPerson !== idPerson) {
    throw 'You can\'t delete this collection';
  }
  return Collection.destroy({ where: { id } });
};
