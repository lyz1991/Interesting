const exprss = require("express")
const fs = require('fs')
var router = exprss.Router()
router.get('/app/test', (req,res) => {
  fs.readFile('./public/music/1.mp3', (err, name) => {
    if (err) {
      console.log('rr')
    }
    res.send(name)
  })
})
module.exports = router