const Koa = require('koa')
const app = new Koa()
app.use(async (ctx, next) => {
 await next()
 ctx.response.type = 'text/html'
 ctx.response.body = `<h1>koa学习方法</h1>`
})
let port = 1666
app.listen(port)
console.log(`app started at port ${port}`)
