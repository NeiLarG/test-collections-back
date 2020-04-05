const Account = require('./Account');
const Collection = require('./Collection');
const Comment = require('./Comment');
const Image = require('./Image');
const Item = require('./Item');
const Like = require('./Like');
const Person = require('./Person');
const Role = require('./Role');
const Status = require('./Status');
const Topic = require('./Topic');

module.exports.createAssociations = () => {
  // Person <-> Collection association
  Person.hasMany(Collection, {
    foreignKey: 'ID',
    targetkey: 'ID_PERSON',
    as: 'collections',
  });
  Collection.belongsTo(Person, {
    foreignKey: 'ID_PERSON',
    targetkey: 'ID',
    as: 'person',
  });
  // Account <-> Person association
  Account.hasOne(Person, {
    foreignKey: 'ID_ACCOUNT',
    targetkey: 'ID',
    as: 'person',
  });
  // Like <-> Item association
  Item.hasMany(Like, {
    foreignKey: 'ID_ITEM',
    targetkey: 'ID',
    as: 'likes',
  });
  Like.belongsTo(Item, {
    foreignKey: 'ID',
    targetkey: 'ID_ITEM',
    as: 'item',
  });
  // Comment <-> Item association
  Item.hasMany(Comment, {
    foreignKey: 'ID_ITEM',
    targetkey: 'ID',
    as: 'comments',
  });
  Comment.belongsTo(Item, {
    foreignKey: 'ID',
    targetkey: 'ID_ITEM',
    as: 'item',
  });
  // Topic <-> Collection association
  Topic.hasOne(Collection, {
    foreignKey: 'ID_TOPIC',
    targetkey: 'ID',
  });
  Collection.belongsTo(Topic, {
    foreignKey: 'ID_TOPIC',
    targetkey: 'ID',
    as: 'topic',
  });
  // Image <-> Collection association
  Image.hasOne(Collection, {
    foreignKey: 'ID_IMAGE',
    targetkey: 'ID',
  });
  Collection.belongsTo(Image, {
    foreignKey: 'ID_IMAGE',
    targetkey: 'ID',
    as: 'image',
  });
};
