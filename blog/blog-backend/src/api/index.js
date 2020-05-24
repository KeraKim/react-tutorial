const Router = require('koa-router');
const api = new Router();

const posts = require('./posts')

api.use('/posts', posts.routes())

// api.get('/test', (ctx) => {
//   ctx.body = 'test 성공';
// });

module.exports = api;
