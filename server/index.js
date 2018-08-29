import Koa from 'koa'
import koaRouter from 'koa-router'
import request from 'superagent'
import { Nuxt, Builder } from 'nuxt'
const router = koaRouter()

async function start () {
  const app = new Koa()
  const host = process.env.HOST || '127.0.0.1'
  const port = process.env.PORT || 3000

  // Import and Set Nuxt.js options
  const config = require('../nuxt.config.js')
  config.dev = !(app.env === 'production')

  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  //
  router.get('/getMove', async (ctx, next) => {
    let {id} = ctx.request.query
    console.log(`id==${id}`)
    const data = new Promise( (resolve, reject) => {
            let doubanApi='http://api.douban.com/v2/movie/subject/1041179'
            let userApi='http://mobile.atguat.com.cn/quickapp/profile/userProfileA.jsp'
        request.get(userApi)
            .then( res => {
                resolve(res.body)
            }).catch( e => {
                console.log(e)
                reject(e)
            })
    })
    ctx.body = await data
    // ctx.body = {code:400,message:'ok',data:{a:1}}
})
  app.use(router.routes()).use(router.allowedMethods())

  //
  app.use(ctx => {
    ctx.status = 200
    ctx.respond = false // Mark request as handled for Koa
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}

start()
