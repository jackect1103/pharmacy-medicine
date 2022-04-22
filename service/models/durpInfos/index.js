const durpInfosModel = function (sequelize, DataTypes) {

  return sequelize.define('durpInfos', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true
    },
    // 编号
    number: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'number'
    },
    // 厂家
    factory: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'factory'
    },
    // 药品名称
    durgname: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'durgname'
    },
    // 仓库名称
    warehousename: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'warehousename'
    },
    // 价格
    price: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'price'
    },
    // 生成日期
    productiontime: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'productiontime'
    },
    // 过期日期
    expirationtime: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'expirationtime'
    },
    // 是否为处方
    prescription: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'prescription'
    },
    // 分类
    class: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'class'
    },
    // 本库数量
    librarynumber: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'librarynumber'
    },
    // 地区数量
    regionsnumber: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'regionsnumber'
    }
  },
  {
    timestamps: false
  })
}
  
export {
  durpInfosModel
}