module.exports = (db, DataTypes) => {
  const Topic = db.define('Topic', {
    id: {
      field: 'ID',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      field: 'NAME',
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'topic',
    timestamps: false,
  });
  return Topic;
};
