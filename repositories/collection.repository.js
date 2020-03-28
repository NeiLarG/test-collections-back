const db = require('../models');

module.exports.createCollection = async (collection) => db.Collection.create(collection);

module.exports.getCollectionsByPersonId = async (idPerson) => {
  const person = await db.Person.findByPk(idPerson);
  if (!person) {
    throw 'Person is not founded';
  }
  return db.Collection.findAll({ where: { idPerson } });
};
