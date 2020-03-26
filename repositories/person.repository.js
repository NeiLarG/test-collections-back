const db = require('../models');

module.exports.createPerson = async (person, options) => {
  const existingsNickNameCount = await db.Person.count({ where: { nickName: person.nickName } });
  if (existingsNickNameCount > 0) {
    throw 'NickName already used.';
  }
  return db.Person.create(person, options);
};
