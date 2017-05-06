import * as consts from './consts.js'
import { nextframe } from 'util'
class Bless {
  init () {
    consts.canvas.width = consts.cwidth
    consts.canvas.height = consts.cheight
    this.drawzhu()
    this.draw()
  }
  draw () {
    consts.ctx.clearRect(0, 0, 600, 260)
    consts.ctx.save()
    consts.ctx.shadowColor = '#FDA936'
    consts.ctx.shadowOffsetY = consts.shadowOffsetY
    consts.ctx.shadowBlur = consts.shadowBlur
    let line = consts.ctx.createLinearGradient(0, 30, 0, 250)
    line.addColorStop(0, consts.gtopcolor)
    line.addColorStop(0.2, consts.gmidcolor)
    line.addColorStop(0.85, consts.gmidcolor)
    line.addColorStop(0.99, consts.bomcolor)
    line.addColorStop(1, consts.bomcolor)
    consts.ctx.fillStyle = line
    consts.ctx.globalAlpha = consts.globalAlpha
    consts.ctx.beginPath()
    consts.ctx.moveTo(265, 250)
    let x = (Math.random() * 80 - 40) * 0.05
    consts.ctx.bezierCurveTo(220 + x, 60, 330 + x, 60, 285, 250)
    consts.ctx.fill()
    consts.ctx.closePath()
    consts.ctx.restore()
    consts.ctx.beginPath()
    consts.ctx.moveTo(275, 255)
    consts.ctx.globalCompositeOperation = consts.globalCompositeOperation;
    consts.ctx.lineWidth = 5
    consts.ctx.lineCap = 'round'
    consts.ctx.lineTo(275, 220)
    consts.ctx.strokeStyle = consts.xincolor
    consts.ctx.stroke()
    consts.ctx.beginPath()
    let zhu = consts.ctx.createLinearGradient(232, 250, 322, 550)
    zhu.addColorStop(0, consts.ztopcolor)
    zhu.addColorStop(0.3, consts.zmidcolor)
    zhu.addColorStop(0.6, '#870509')
    zhu.addColorStop(0.99, consts.zbomcolor)
    zhu.addColorStop(1, consts.zbomcolor)
    consts.ctx.fillStyle = zhu
    consts.ctx.moveTo(232, 260)
    consts.ctx.bezierCurveTo(245, 250, 310, 250, 322, 260)
    consts.ctx.fill()
    consts.ctx.closePath()
    nextframe(this.draw.bind(this))
  }
  drawzhu () {
    consts.ctx.beginPath()
    let zhu = consts.ctx.createLinearGradient(232, 250, 322, 550)
    zhu.addColorStop(0, consts.ztopcolor)
    zhu.addColorStop(0.3, consts.zmidcolor)
    zhu.addColorStop(0.6, '#870509')
    zhu.addColorStop(0.99, consts.zbomcolor)
    zhu.addColorStop(1, consts.zbomcolor)
    consts.ctx.fillStyle = zhu
    consts.ctx.moveTo(232, 260)
    consts.ctx.lineTo(322, 260)
    consts.ctx.lineTo(322, 560)
    consts.ctx.lineTo(232, 560)
    consts.ctx.fill()
    consts.ctx.closePath()
  }
}
export default Bless
