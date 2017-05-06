const koa = require('koa');
const app = koa();
const fs = require('fs')
const serve = require('koa-static');
app.use(serve('.'));
const route = require('koa-router')()
route.get('/app/test', function *(next) {
    fs.readFile('./music/1.mp3', (err, name) => {
        if (err) return
        this.body = name
    })
});
app.use(route.routes())

app.listen(3000, () => {
    console.log('开启')
});