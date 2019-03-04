const Koa = require('koa')
const router = new require('koa-router')()
var bodyParser = require('koa-bodyparser')
const app = new Koa()
app.use(bodyParser())

app.use(async (ctx, next) => {
 console.log(`${ctx.request.method} ${ctx.request.url}`)
 await next()
})

router.get('/', async (ctx, next) => {
 ctx.response.body = `
 <h1>Index</h1>
 <form action="/signin" method="post">
 <p>Name: <input name="name" type='text'></p>
 <p>Password: <input name="password" type="password"></p>
 <p><input type="submit" value="Submit"></p>
</form>
 `
})

router.post('/signin', async (ctx, next) => {
 console.log(JSON.stringify(ctx.request.body))
 var name = ctx.request.body.name || ''
 var password = ctx.request.body.password || ''
 console.log(`signin with name:${name},password:${password}`)
 if (name && password === '000000') {
  ctx.response.body = `
  <h1>welcome,${name}!</h1>
  `
 } else {
  ctx.response.body = `
  <h1>Login failed!</h1><p><a href='/'>重试</a></p>
  `
 }
})

app.use(router.routes())

let port = 1666
app.listen(port)
console.log(`app started at port ${port}`)
