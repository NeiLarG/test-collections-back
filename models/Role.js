module.exports = (db, DataTypes) => {
  const Role = db.define('Role', {
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
    tableName: 'role',
    timestamps: false,
  });
  return Role;
};
