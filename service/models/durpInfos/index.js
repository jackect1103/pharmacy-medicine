const durpInfos = function (sequelize, DataTypes) {

    return sequelize.define('durpInfos', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: true,
        autoIncrement: true
      },
      number: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'number'
      },
      factory: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'factory'
      },
      drugname: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'drugname'
      },
      warehousename: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'warehousename'
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'price'
      },
      productiontime: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'productiontime'
      },
      expirationtime: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'expirationtime'
      },
      prescription: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'prescription'
      },
      class: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'class'
      },
      librarynumber: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'librarynumber'
      },
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
    durpInfos
  }