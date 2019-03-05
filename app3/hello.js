/*
 * @Description:
 * @Author: 靳小健
 * @Email: jinxiaojian@youxin.com
 * @LastEditors: 靳小健
 * @Date: 2019-03-05 11:16:39
 * @LastEditTime: 2019-03-05 16:07:04
 */
var fun_hello = async (ctx, next) => {
  var name = ctx.params.name;
  ctx.response.body = `
  <h1>hello world</h1>
  <p>欢迎你!${name}!</p>
  <p><a href='/'>退出登录</a></p>
 `;
};

module.exports = {
  "GET /hello/:name": fun_hello,
};
