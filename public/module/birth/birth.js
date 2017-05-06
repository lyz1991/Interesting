import { nextframe } from 'util'
import * as consts from 'birthconst'
consts.analyser.connect(consts.ac.destination)
class Birthday {
  constructor (str, radio, canvas, w, h, size) {
    this.str = str;
    this.radio = radio;
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d');
    this.width = w
    this.height = h
    this.size = size
  }
  init () {
    this.canvas.width = this.width
    this.canvas.height = this.height
    consts.analyser.fftSize = this.size * 2
    let line = this.ctx.createLinearGradient(0, 0, 0, 600)
    line.addColorStop(0, consts.topcolor)
    line.addColorStop(0.5, consts.midcolor)
    line.addColorStop(1, consts.bomcolor)
    this.ctx.fillStyle = line
    this.getData()
    this.asyc()
  }
  getData () {
    let xhr = new XMLHttpRequest()
    xhr.open('get', '/app/test');
    xhr.responseType = 'arraybuffer';
    xhr.onload = () => {
      consts.ac.decodeAudioData(xhr.response, (buffer) => {
        const buffesource = consts.ac.createBufferSource();
        buffesource.buffer = buffer
        buffesource.loop = true
        buffesource.connect(consts.analyser)
        buffesource.start(0, 1)
      }, (err) => {
        console.log(err)
      })
    }
    xhr.send()
  }
  draw (arr) {
    this.ctx.clearRect(0, 0, this.width, this.height)
    let l = arr.length
    for (let i = 0; i < l; i++) {
      let h = (arr[i] / consts.hradio) * this.height;
      this.ctx.fillRect(consts.w * i, this.height - h, consts.w * 0.6, h)
      if (h > 0 && i < this.str.length) {
        this.ctx.fillText(this.str[i], consts.w * i, this.height - h - 2 * consts.fontwidth, 100)
      }
    }
  }
  asyc () {
    let arr = new Uint8Array(consts.analyser.frequencyBinCount)
    consts.analyser.getByteFrequencyData(arr)
    this.draw.bind(this)(arr)
    nextframe(this.asyc.bind(this))
  }
}
export default Birthday
