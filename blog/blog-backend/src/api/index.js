// const Router = require('koa-router');
// const api = new Router();

import Routers from 'koa-router'
import posts from "./posts";

const api = new Routers()

api.use('/posts', posts.routes())

// api.get('/test', (ctx) => {
//   ctx.body = 'test 성공';
// });

export default api
