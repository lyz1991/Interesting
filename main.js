const express = require('express');
const path = require('path');
const fspath = path.join(__dirname, '/public/html')
const open = require("open");
const fs = require('fs')
const app = express();
const router = require('./server/router')
app.use(router)
let port = Math.floor(Math.random() * 8000 + 1000);
let selectfs = (dir) => {
    fs.readdir(dir, (err, name) => {
        let i = Math.floor(Math.random() * name.length);
        let fsname = name[i]
        open(`http:localhost:${ port }/html/${fsname }`,"chrome")
    })
}

app.use(express.static('./public'))
app.listen(port, () => {
    console.log(port)
  selectfs(fspath)
})

