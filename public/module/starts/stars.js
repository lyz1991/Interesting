import Partical from './particals.js'
import { nextframe } from 'util'
class Stars {
  constructor () {
    this.canvas = document.getElementById('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.totalnum = 30
    this.particals = []
    this.w = this.canvas.width
    this.h = this.canvas.height
    this.positions = []
    this.avgw = null
  }
  init () {
    for (let i = 0; i < this.totalnum; i++) {
      this.particals.push(new Partical())
    }
    this.draw()
  }
  draw () {
    this.ctx.globalCompositeOperation = "source-over"
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.3)"
    this.ctx.fillRect(0, 0, this.w, this.h)
    this.ctx.globalCompositeOperation = "lighter";
    for (let i = 0; i < this.totalnum; i++) {
      let p = this.particals[i]
      this.ctx.beginPath()
      var gradient = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.R);
      gradient.addColorStop(0, "white");
      gradient.addColorStop(0.4, "white");
      gradient.addColorStop(0.4, p.color);
      gradient.addColorStop(1, "black");
      this.ctx.fillStyle = gradient;
      this.ctx.arc(p.x, p.y, p.R, 0, Math.PI * 2)
      this.ctx.fill()
      p.x += p.vx
      p.y += p.vy
      if (p.x > 450 || p.x < 50) {
        p.vx *= -1
      }
      if (p.y > 450 || p.y < 50) {
        p.vy *= -1
      }
    }
    nextframe(this.draw.bind(this))
  }
}
export default Stars
