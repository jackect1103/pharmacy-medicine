/**
 * 测试koa中间件洋葱模式
 */
const Koa  = require("koa")
const app = new Koa()
console.log(app)

/**
 * 中间件 1
 */
app.use(async (ctx, next) => {
  console.log("first start");
  await next();
  console.log("first end");
});

/**
 * 中间件 2
 */
app.use(async (ctx, next) => {
  console.log("second start");
  await next();
  console.log("second end");
});

/**
 * 异步中间件 3
 */
app.use(async (ctx, next) => {
  console.log("three async start");
  await next();
  await new Promise((resolve) =>
    setTimeout(() => {
      console.log(`three wait 1000 ms end`);
      resolve();
    }, 1000)
  );
  console.log("three async end");
});

/**
 * 中间件 4
 */
app.use(async (ctx, next) => {
  console.log("four start");
  await next();
  console.log("four end");
});

app.use(async (ctx) => {
  console.log('Hello World')
  ctx.body = "Hello World";
});

app.listen(3000);

/**
 * 打印结果
 * first start
 * second start
 * three async start
 * four start
 * Hello World
 * four end
 * three wait 1000 ms end
 * three async end
 * second end
 * first end
 */