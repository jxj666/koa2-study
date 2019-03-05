/*
 * @Description:
 * @Author: 靳小健
 * @Email: jinxiaojian@youxin.com
 * @LastEditors: 靳小健
 * @Date: 2019-03-05 11:16:39
 * @LastEditTime: 2019-03-05 16:14:11
 */
var fun_hello = async (ctx, next) => {
  var name = ctx.params.name;
  ctx.response.body = `
  <h1>最简陋的主页欢迎你!</h1>
  <h3>欢迎你! ${name}!</h3>
  <h6>本网页基于koa</h6>
  <p>Koa -- 基于 Node.js 平台的下一代 web 开发框架</p>
  <p><a href='/'>退出登录</a></p>
 `;
};

module.exports = {
  "GET /hello/:name": fun_hello,
};
