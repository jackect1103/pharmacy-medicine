const userModel = function (sequelize, DataTypes) {

  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'userid'
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'username'
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'password'
    },
    roleid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'roleid'
    }
  },
  {
    timestamps: false
  })
}
export {
  userModel
}