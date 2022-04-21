import KoaRouter from 'koa-router'

const router = new KoaRouter() 

router.get('/card', (ctx, next) => {
  // ctx.router available
  ctx.body = {
    "code": 0,
    "data": {
      "avgAmount": 5568,
      "avgMemberName": 37,
      "avgOrderNum": 56,
      "newMemberName": 35,
      "oldMemberName": 2,
      "totalAmount": 5568,
      "totalMemberName": 37,
      "totalOrderNum": 56
    },
    "message": "OK!",
    "msg": "OK!",
    "subCode": null,
    "subMsg": null
  }
});

router.get('/order-times', (ctx, next) => {
  ctx.body = {
    "code": 0,
    "data": {
      "orderTimesListVoList": [
        {
          "goodsTotalPriceSum": 0,
          "memberNameCount": 0,
          "orderTimes": 0,
          "proportion": 0,
          "timeInterval": 0
        },
        {
          "goodsTotalPriceSum": 100,
          "memberNameCount": 1,
          "orderTimes": 1,
          "proportion": 50,
          "timeInterval": 0
        },
        {
          "goodsTotalPriceSum": 0,
          "memberNameCount": 0,
          "orderTimes": 2,
          "proportion": 0,
          "timeInterval": 0
        },
        {
          "goodsTotalPriceSum": 0,
          "memberNameCount": 0,
          "orderTimes": 3,
          "proportion": 0,
          "timeInterval": 0
        },
        {
          "goodsTotalPriceSum": 629,
          "memberNameCount": 1,
          "orderTimes": 4,
          "proportion": 50,
          "timeInterval": 16
        },
        {
          "goodsTotalPriceSum": 0,
          "memberNameCount": 0,
          "orderTimes": 5,
          "proportion": 0,
          "timeInterval": 0
        }
      ],
      "totalGoodsTotalPriceSum": 729,
      "totalMemberNameCount": 2,
      "totalProportion": 100,
      "totalTimeInterval": 8
    },
    "message": "OK!",
    "msg": "OK!",
    "subCode": null,
    "subMsg": null
  }
});