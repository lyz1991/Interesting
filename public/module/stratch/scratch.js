import * as consts from 'strtchconst'
let state
class Stratch {
  init () {
    let img = new Image();
    img.src = consts.imgsrc
    img.onload = () => {
      this.bind(img)
      this.setsize(consts.wrapper, img)
    }
  }
  bind (img) {
    consts.canvas.addEventListener('mousedown', (e) => {
      state = true;
      let beginx = e.clientX - (consts.cWidht - img.width) / 2
      let clip = {
        x: beginx,
        y: e.pageY - consts.margin,
        r: consts.r
      };
      this.draw(img, clip)
      consts.canvas.addEventListener('mousemove', (e) => {
        if (state) {
          let beginx = e.clientX - (consts.cWidht - img.width) / 2
          let clip = {
            x: beginx,
            y: e.pageY - consts.margin,
            r: consts.r
          };
          this.draw(img, clip)
        }
      }
        )
    }
      )
    document.addEventListener('mouseup', () => {
      state = false
    })
  }
  draw (img, clip) {
    consts.ctx.save();
    this.setclip(clip)
    consts.ctx.drawImage(img, 0, 0);
    consts.ctx.restore()
  }
  setclip (clip) {
    consts.ctx.beginPath();
    consts.ctx.arc(clip.x, clip.y, clip.r, 0, 2 * Math.PI, false)
    consts.ctx.clip()
  }
  setsize (dom, img) {
    dom.style.width = img.width + 'px'
    dom.style.height = img.height + 'px'
    dom.style.marginTop = consts.margin + 'px'
  }
}
export default Stratch
