import { nextframe } from 'util'
class Progress {
  constructor (outer, inner, score, id) {
    this.outer = document.getElementById(outer)
    this.inner = document.getElementById(inner)
    this.ctx1 = this.outer.getContext('2d')
    this.ctx2 = this.inner.getContext('2d')
    this.fontSize = document.getElementsByTagName('html')[0].style.fontSize
    this.outer.width = parseInt(this.fontSize) * 10
    this.inner.width = parseInt(this.fontSize) * 10
    this.outer.height = this.outer.width / 2
    this.inner.height = this.inner.width / 2
    this.centerX = this.outer.width / 2
    this.centerY = this.outer.height
    this.R = this.outer.width * 0.4
    this.end = null
    this.id = document.getElementById(id)
    this.score = score
    this.beginnum = 0
    this.getscore = 0
  }
  init (container) {
    document.getElementsByClassName(container)[0].style.height = this.inner.height + 'px'
    document.getElementsByClassName(container)[0].style.width = this.inner.width + 'px'
    this.end = this.score * 180 / 100
    this.drawbiginner(this.ctx1, this.centerX, this.centerY, this.R)
    this.go()
  }
  drawbiginner (ctx, x, y, r) {
    ctx.beginPath()
    ctx.save()
    this.fillstyle = ctx.createLinearGradient(x - r, y, x + r, y)
    this.fillstyle.addColorStop(0, '#fe6398')
    this.fillstyle.addColorStop(0.25, '#FFA73E')
    this.fillstyle.addColorStop(0.5, '#FEFE00')
    this.fillstyle.addColorStop(0.75, '#79FD96')
    this.fillstyle.addColorStop(1, '#00F6F6')
    ctx.fillStyle = this.fillstyle
    ctx.arc(x, y, r, 0, -Math.PI, true)
    ctx.fill()
    ctx.restore()
    ctx.closePath()
    ctx.beginPath()
    ctx.save()
    ctx.fillStyle = 'white'
    ctx.arc(x, y, r - 15, 0, -Math.PI, true)
    ctx.fill()
    ctx.restore()
    ctx.beginPath()
    ctx.save()
    ctx.strokeStyle = 'white'
    ctx.arc(x, y, r - 20, 0, -Math.PI, true)
    ctx.stroke()
    ctx.restore()
    ctx.save()
    ctx.strokeStyle = '#BCBCBC'
    for (let i = 0; i > -180; i -= 3.6) {
      ctx.beginPath()
      ctx.moveTo(x + (r - 20) * Math.cos(Math.PI * i / 180), y + (r - 20) * Math.sin(Math.PI * i / 180))
      ctx.lineTo(x, y)
      ctx.stroke()
    }
    ctx.restore()
    ctx.save()
    ctx.fillStyle = 'white'
    ctx.arc(x, y, r - 30, 0, -Math.PI, true)
    ctx.fill()
    ctx.restore()
    this.font(ctx, x, y, r)
    return this
  }
  font (ctx, x, y, r) {
    ctx.save()
    ctx.fillStyle = '#BCBCBC'
    for (let i = 0; i <= 5; i++) {
      ctx.fillText(i * 20, x + (r - 35 - 3 * i) * Math.cos(-Math.PI + Math.PI * 36 * i / 180), y + (r - 35 - 3 * i) * Math.sin(-Math.PI + Math.PI * 36 * i / 180))
    }
    ctx.restore()
  }
  go (id) {
    this.ctx2.strokeStyle = this.fillstyle
    this.ctx2.fillStyle = this.fillstyle
    if (this.beginnum < this.end) {
      this.ctx2.clearRect(0, 0, this.outer.width, this.outer.height)
      this.beginnum++
      this.getscore = (this.beginnum * 100 / 180) | 0
      this.id.innerHTML = this.getscore + '分'
      this.ctx2.beginPath()
      this.ctx2.arc(this.centerX, this.centerY, this.R + 10, -Math.PI, -Math.PI + Math.PI * this.beginnum / 180, false)
      this.ctx2.stroke()
      this.ctx2.beginPath()
      this.ctx2.save()
      this.ctx2.shadowBlur = 6
      this.ctx2.shadowColor = 'red'
      this.ctx2.arc(this.centerX + (this.R + 10) * Math.cos(-Math.PI + Math.PI * this.beginnum / 180), this.centerY + (this.R + 10) * Math.sin(-Math.PI + Math.PI * this.beginnum / 180), 3, 0, Math.PI * 2, false)
      this.ctx2.fill()
      this.ctx2.restore()
      nextframe(this.go.bind(this))
    }
  }
}
export default Progress
