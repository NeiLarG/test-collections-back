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
