import Sequelize from 'sequelize'
var sequelize = new Sequelize('test_database','root','QWAszx1103!',{
  host:'106.13.199.161',
  dialect:'mysql',
  operatorsAliases:false,
  dialectOptions:{
    //字符集
    charset:'utf8mb4',
    supportBigNumbers: true,
    bigNumberStrings: true
  },
  pool:{
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  timezone: '+08:00'  //东八时区
});

try {
  sequelize.authenticate();
  console.log(' 连接数据库成功.');
} catch (error) {
  console.error( `连接数据库失败${error}`);
}

export default sequelize