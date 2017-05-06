import { fillcolor } from './const.js'
class Snow {
  constructor (ctx, x, y, r, ax) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.ax = ax
  }
  down (ay) {
    this.y += ay;
    this.x += this.ax
  }
  render (ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = fillcolor;
    ctx.closePath()
    ctx.fill()
  }
}
export default Snow
