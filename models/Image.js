module.exports = (db, DataTypes) => {
  const Image = db.define('Image', {
    id: {
      field: 'ID',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    link: {
      field: 'LINK',
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'image',
    timestamps: false,
  });
  return Image;
};
