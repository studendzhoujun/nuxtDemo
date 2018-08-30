import koaRouter from 'koa-router'
import request from 'superagent'
const router =new koaRouter()

export default app => {
    router.get('/about/s', async (ctx, next) => {
        ctx.body = require('./demo.json')
    })
    // 添加路由中间件
    // 对请求进行一些限制处理
    app.use(router.routes()).use(router.allowedMethods())
}

