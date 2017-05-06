import Snow from './constructor.js'
import * as consts from 'snowconst'
let loop = () => {
  consts.ctx.clearRect(0, 0, consts.ctxwidth, consts.ctxheight)
  let snow = new Snow(consts.ctx, Math.random() * consts.ctxwidth, Math.random() * consts.y, Math.random() * consts.r, (Math.random() * consts.ax - 2) * 0.7);
  consts.arr.push(snow);
  for (var i = 0; i < consts.arr.length; i++) {
    consts.arr[i].render(consts.ctx);
    consts.arr[i].down(consts.ay);
  }
  if (consts.arr.length > 200) {
    consts.arr.shift();
  };
}
export default loop
