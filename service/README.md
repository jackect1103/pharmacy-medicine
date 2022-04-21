### 初始化项目
```js
npm init
```

### 安装kao
```js
npm install koa
```

### 目录创建
- config - 配置文件
   - 数据库(mysql,oracle,redis等)
   - OSS
   - ...
- models - 文件夹主要是我们的数据库模型（ORM），存储数据库映射文件
- 定义数据表字段模型
   - models
   - index.js - 入口文件
- controller - 为控制层，主要处理外部请求。调用service层，将service返回的内容整合后返回给调用方
  
- service - 作为服务层主要做业务逻辑处理，数据处理等，将结果返回给controller层
- 处理数据库数据
  ```js
    const db = require('../models/')
    const findAllUser = async () => {
     const result = await db.user.findAll()
     return result
    }
    module.exports = {
     findAllUser
    }
  ```
- router - 管理我们的路由，也就是接口地址
  ```js
  const user = require('../controller/user')
  const koa_router = require('koa-router');
  const router = koa_router();
  router.post('/findAll', user.findAllUser)
  module.exports = router
  ```
- middlewares - 中间件
- public - 静态资源
- app.js - 启动文件
  ```js
  // app.js

  const Koa = require('koa');
  const app = new Koa();

  app.use(async ctx => {
   ctx.body = 'Wise Wrong';
  });

  app.listen(3000);
  ```

### 后台服务启动

- 可以安装nodemon库可以实时监听项目文件的变动，同时也不需要一直去启动项目
  
```js
npm run start
```


### 用sequelize来操作数据库，同时安装mysql、mysql2
```js
cnpm install sequelize mysql mysql2 --save
```

> Sequelize 是一个基于 promise 的 Node.js ORM, 目前支持 Postgres, MySQL, MariaDB, SQLite 以及 Microsoft SQL Server. 它具有强大的事务支持, 关联关系, 预读和延迟加载,读取复制等功能。

> Sequelize 遵从 语义版本控制。 支持 Node v10 及更高版本以便使用 ES6 功能。


### 可以使用脚手架的方式创建项目
```js
npm install koa-generator -g

koa2 project_name
```
[项目创建资料](https://www.yisu.com/zixun/162347.html)