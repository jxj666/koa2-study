const Koa = require('koa')
const router = require('koa-router')()
const app = new Koa()

app.use(async (ctx, next) => {
 console.log(`${ctx.request.method} ${ctx.request.url}`)
 await next()
})

router.get(`/hello/:name`, async (ctx, next) => {
 var name = ctx.params.name
 ctx.response.body = `<h1>你好${name}</h1>`
})

router.get('/', async (ctx, next) => {
 ctx.response.body = `<h1>Index</h1>`
})

app.use(router.routes())

let port = 1666
app.listen(port)
console.log(`app started at port ${port}`)
