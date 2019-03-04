const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
 console.log(`${ctx.request.method} ${ctx.request.url}`)
 await next()
})
app.use(async (ctx, next) => {
 const time1 = +new Date()
 await next()
 const time2 = +new Date()
 console.log(`耗时${time2 - time1}s`)
})
app.use(async (ctx, next) => {
 if (Math.random() > 0.5) {
  await next()
 } else {
  ctx.response.status = 404
  ctx.response.body = `error!`
 }
})
app.use(async (ctx, next) => {
 await next()
 ctx.response.type = 'text/html'
 ctx.response.body = `<h1>hello!</h1>`
})

let port = 1666
app.listen(port)
console.log(`app started at port ${port}`)
