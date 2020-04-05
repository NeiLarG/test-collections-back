const Person = require('../models/Person');

module.exports.createPerson = async (person, options) => {
  const existingsNickNameCount = await Person.count({ where: { nickName: person.nickName } });
  if (existingsNickNameCount > 0) {
    throw 'NickName already used.';
  }
  return Person.create(person, options);
};
