/*
 * @Description:
 * @Author: 靳小健
 * @Email: jinxiaojian@youxin.com
 * @LastEditors: 靳小健
 * @Date: 2019-03-05 14:45:34
 * @LastEditTime: 2019-03-05 15:49:58
 */
const Koa = require("koa");
var bodyParser = require("koa-bodyparser");
const app = new Koa();
const controller = require("./app3/controll");

app.use(async (ctx, next) => {
  console.log(`process ${ctx.method} ${ctx.request.url}`);
  await next();
});

app.use(bodyParser());
app.use(controller());

let port = 1666;
app.listen(port);
console.log(`app started at port ${port}`);
