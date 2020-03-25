const db = require('../models');

module.exports.createPerson = async (person) => {
  const dbPerson = db.Person.build(person);
  return dbPerson.save();
};
