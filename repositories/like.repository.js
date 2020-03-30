const db = require('../models');

module.exports.createLike = async (like) => {
  const existingLikesCount = await db.Like.count({
    where: {
      idPerson: like.idPerson,
      idItem: like.idItem,
    },
  });
  if (existingLikesCount) {
    throw 'Like is already standing';
  }
  return db.Like.create(like);
};

module.exports.deleteLike = async (like) => {
  const existingLikesCount = await db.Like.count({
    where: {
      idPerson: like.idPerson,
      idItem: like.idItem,
    },
  });
  if (!existingLikesCount) {
    throw 'Like is not standing';
  }
  return db.Like.destroy({ where: like });
};
