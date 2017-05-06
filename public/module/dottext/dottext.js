import Partical from './partical.js'
class dottext {
  constructor (arr = ['刘云钊']) {
    this.text = arr
    this.canvas = document.getElementById('mycanvas')
    this.ctx = this.canvas.getContext('2d')
    this.totalnum = 962
    this.particals = []
    this.w = this.canvas.width
    this.h = this.canvas.height
    this.positions = []
    this.avgw = null
  }
  start () {
    this.init()
  }
  init () {
    this.avgw = Math.sqrt(this.w * this.h / this.totalnum)
    for (let i = 0; i < this.totalnum; i ++) {
      let x = i * this.avgw % this.w
      let y = Math.ceil(i * this.avgw / this.w) * this.avgw
      // this.particals.push(new Partical(x, y))
    }
    this.createcanvas(this.w, this.h)
  }
  createcanvas (w, h) {
    let canvas = document.createElement('canvas')
    canvas.width = w
    canvas.height = h
    let tctx = canvas.getContext('2d')
    tctx.fillStyle = 'white'
    tctx.fillRect(0, 0, w, h)
    tctx.fillStyle = 'black'
    tctx.font="50px Arial";
    tctx.fillText(this.text, 0, 100)
    let data = tctx.getImageData(0, 0, 600, 600)
    this.copy(data)
  }
  copy (data) {
    /* for (let i = 0, piex = data.data, len = piex.length; i < len; i += 4) {
      if (piex[i] != 255) {
        piex[i] = Math.random() * 255 | 0
        piex[i+1] = Math.random() * 255 | 0
        piex[i+2] = Math.random() * 255 | 0
        piex[i+3] = Math.random() * 255 | 0
      }
    } */
    for (let i = 0; i < this.h; i++) {
      for (let j = 0; j < this.w; j++) {
        let pos = [i * this.w + j]
        if (data.data[pos] != 255) {
          this.particals.push(new Partical(j, i))
        }
      }
    }
    this.render(this.particals)
    // this.ctx.putImageData(data, 0, 0)
  }
  render (arr) {
    for (let i = 0; i < arr.length; i++) {
      this.ctx.beginPath()
      this.ctx.fillStyle = "rgb(" + arr[i].r + "," + arr[i].g + "," +  arr[i].b + ")"
      this.ctx.fillRect(arr[i].x, arr[i].y, 1, 1)
    }
  }
}
export default dottext