const warehouseModel = function (sequelize, DataTypes) {

  return sequelize.define('warehouse', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true
    },
    warehousename: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'warehousename'
    },
    class: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'class'
    },
    durgname: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'durgname'
    },
    librarynum: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'librarynum'
    },
    outbound: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'outbound'
    },
    entry: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'entry'
    }
  },
  {
    timestamps: false
  })
}
export {
  warehouseModel
}