import * as consts from './const.js'
class Write {
  init () {
    consts.canvas.addEventListener('mousedown', (e) => {
      consts.state = true
      consts.ctx.lineWidth = consts.strokewidth;
      consts.ctx.strokeStyle = consts.color
      let beginX = (e.clientX - (consts.cWith - consts.cawidth) / 2);
      consts.ctx.moveTo(beginX, e.clientY);
      consts.canvas.addEventListener('mousemove', (e) => {
        if (consts.state) {
          consts.ctx.lineTo((e.clientX - (consts.cWith - consts.cawidth) / 2), e.clientY);
          consts.ctx.stroke()
        }
      })
    })
    consts.d.addEventListener('mouseup', (e) => {
      consts.state = false
    })
  }
}
export default Write
