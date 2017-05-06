const path = require('path');
const basepath = path.join(__dirname, '../js')
const glob = require('glob')
let getentry = () => {
   let entry = {}
   glob.sync('./public/js/**/*.js').forEach((file) => {
       entry[file.slice(11, file.length -3)] = basepath + file.slice(11)
   })
    return entry
}
module.exports = {
    entry: getentry(),
    alias: {
      'angular': path.join(__dirname, '../lib/angular.min.js'),
      'jquery': path.join(__dirname, '../lib/jquery.min.js'),
      'util': path.join(__dirname, '../module/until/util.js'),
      'birth': path.join(__dirname, '../module/birth/birth.js'),
      'birthconst': path.join(__dirname, '../module/birth/consts.js'),
      'snow': path.join(__dirname, '../module/snow/snow.js'),
      'snowconst': path.join(__dirname, '../module/snow/const.js'),
      'scratch': path.join(__dirname, '../module/stratch/scratch.js'),
      'strtchconst': path.join(__dirname, '../module/stratch/const.js'),
      'write': path.join(__dirname, '../module/write/write.js'),
      'writeconst:': path.join(__dirname, '../module/write/const.js'),
      'bless': path.join(__dirname, '../module/bless/bless.js'),
      'onecol': path.join(__dirname, '../module/slider/onecol.js'),
      'onecol2': path.join(__dirname, '../module/slider/onecol2.js'),
      'cube': path.join(__dirname, '../module/slider/cube.js'),
      'carousel': path.join(__dirname, '../module/slider/carrousel.js'),
      'slider': path.join(__dirname, '../module/slider/slider.js'),
      'according': path.join(__dirname, '../module/slider/according.js'),
      'myprogress': path.join(__dirname, '../module/progress/myprogress.js'),
      'flowtext': path.join(__dirname, '../module/flowtext/flowtext.js'),
      'dottext': path.join(__dirname, '../module/dottext/dottext.js'),
      'stars': path.join(__dirname, '../module/starts/stars.js'),
      'lines': path.join(__dirname, '../module/lines/lines.js'),
      'maze': path.join(__dirname, '../module/maze/maze.js')
    }
}