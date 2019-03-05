/*
 * @Description:
 * @Author: 靳小健
 * @Email: jinxiaojian@youxin.com
 * @LastEditors: 靳小健
 * @Date: 2019-03-04 17:56:25
 * @LastEditTime: 2019-03-05 16:10:23
 */
var fun_index = async (ctx, next) => {
  ctx.response.body = `
 <h1>登录</h1>
 <form action="/signin" method="post">
 <p>姓名: <input name="name" type='text'></p>
 <p>密码: <input name="password" type="password"></p>
 <p><input type="submit" value="登录"></p>
</form>
 `;
};

var fun_signin = async (ctx, next) => {
  console.log(JSON.stringify(ctx.request.body));
  var name = ctx.request.body.name || "";
  var password = ctx.request.body.password || "";
  console.log(`signin with name:${name},password:${password}`);
  if (name && password) {
    ctx.response.body = `
  <h1>欢迎你,${name}!</h1>
  <p><a href='/hello/${name}'>进入主页</a><p>
  `;
  } else {
    ctx.response.body = `
  <h1>Login failed!</h1><p><a href='/'>重试</a></p>
  `;
  }
};

module.exports = {
  "GET /": fun_index,
  "POST /signin": fun_signin,
};
