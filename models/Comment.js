const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Comment = sequelize.define('Comment', {
  id: {
    field: 'ID',
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  text: {
    field: 'TEXT',
    type: DataTypes.STRING,
    allowNull: false,
  },
  idPerson: {
    field: 'ID_PERSON',
    type: DataTypes.STRING,
    allowNull: true,
  },
  idItem: {
    field: 'ID_ITEM',
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    field: 'DATE',
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'comment',
  timestamps: false,
  classMethods: {
    associate: (models) => {
      Comment.belongsTo(models.Person, {
        foreignKey: 'ID_PERSON',
      });
      Comment.belongsTo(models.Item, {
        foreignKey: 'ID_ITEM',
      });
    },
  },
});

module.exports = Comment;
