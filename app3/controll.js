/*
 * @Description:
 * @Author: 靳小健
 * @Email: jinxiaojian@youxin.com
 * @LastEditors: 靳小健
 * @Date: 2019-03-05 14:45:34
 * @LastEditTime: 2019-03-05 15:56:59
 */

var fs = require("fs");
const router = new require("koa-router")();

function addControllers(router, dir) {
  fs.readdirSync(__dirname + dir)
    .filter(f => {
      return f.endsWith(".js");
    })
    .forEach(f => {
      console.log(`open>${f}`);
      let mapping = require(__dirname + `${dir}/` + f);
      appMapping(router, mapping);
    });
}

function appMapping(router, mapping) {
  for (var url in mapping) {
    if (url.startsWith("GET ")) {
      var path = url.substring(4);
      router.get(path, mapping[url]);
      console.log(`GET ${path}`);
    } else if (url.startsWith("POST ")) {
      var path = url.substring(5);
      router.post(path, mapping[url]);
      console.log(`POST ${path}`);
    } else {
      console.log(`error ${url}`);
    }
  }
}

module.exports = function(dir) {
  let controllers_dir = dir || "";
  addControllers(router, controllers_dir);
  return router.routes();
};
