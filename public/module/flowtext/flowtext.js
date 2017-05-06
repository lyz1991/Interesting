import * as consts from './const'
import {nextframe} from 'util'
class Flowtext {
  constructor (dom) {
    this.dom = document.getElementById(dom)
  }
  init () {
    this.splittext(this.dom).trans().move()
  }
  splittext (dom) {
    if (dom.children.length > 0) {
      for (let i = 0; i < dom.children.length; i++) {
        this.splittext(dom.children[i])
      }
    } else {
      let html = ''
      for (let i = 0; i < dom.innerHTML.length; i++) {
        html += '<span>' + dom.innerHTML.charAt(i) + '</span>'
      }
      dom.innerHTML = html
    }
    return this
  }
  myradom (s, e) {
    return Math.floor(Math.random() * (e - s + 1) + s);
  }
  setcss (dom, arg, value) {
    if (consts.attribute['px'].hasOwnProperty(arg)) {
      dom.style[arg] = value + 'px'
    }
    if (consts.attribute['deg'].hasOwnProperty(arg)) {
      dom.style[arg] = 'rotate' + value + 'deg'
    }
    if (consts.attribute['color'].hasOwnProperty(arg)) {
      dom.style[arg] = 'rgba(' + value[0] + ',' + value[1] + ',' + value[2] + ',' + value[3]
    }
    dom.style[arg] = value
  }
  trans () {
    let myspan = document.getElementsByTagName('span')
    let len = myspan.length
    for (var i = 0; i < len; i++) {
      let mytop = this.myradom(consts.parameter.randomRStart, consts.parameter.randomTopEnd)
      let myleft = this.myradom(consts.parameter.randomLeftStart, consts.parameter.randomLeftEnd)
      let myr = this.myradom(consts.parameter.randomRStart, consts.parameter.randomREnd)
      let myg = this.myradom(consts.parameter.randomGStart, consts.parameter.randomGEnd)
      let myb = this.myradom(consts.parameter.randomBStart, consts.parameter.randomBEnd)
      let mydeg = this.myradom(consts.parameter.randomDegStart, consts.parameter.randomDegEnd)
      let mya = 0
      consts.arr.leftarr.push(myleft)
      consts.arr.toparr.push(mytop)
      consts.arr.colorAArr.push(mya)
      consts.arr.colorBArr.push(myb)
      consts.arr.colorGArr.push(myg)
      consts.arr.colorRArr.push(myr)
      consts.arr.degArr.push(mydeg)
      this.setcss(myspan[i], 'left', myleft)
      this.setcss(myspan[i], 'top', mytop)
      this.setcss(myspan[i], 'color', [myr, myg, myb, mya])
      this.setcss(myspan[i], 'transform', mydeg)
    }
    return this
  }
  move () {
    let myspan = document.getElementsByTagName('span')
    let len = myspan.length
    for (var i = 0; i < len; i++) {
     // num += this.stopJudege.bind(this)(consts.arr, i)
      if (consts.arr.leftarr[i] < 0) {
        consts.arr.leftarr[i]++
      } else if (consts.arr.leftarr[i] > 0) {
        consts.arr.leftarr[i]--
      }
      if (consts.arr.toparr[i] > 0) {
        consts.arr.toparr[i]--
      } else if (consts.arr.toparr[i] < 0) {
        consts.arr.toparr[i]++
      }
      if (consts.arr.colorRArr[i] < 255) {
        consts.arr.colorRArr[i] += 1;
      }
      if (consts.arr.colorGArr[i] < 255) {
        consts.arr.colorGArr[i] += 1;
      }
      if (consts.arr.colorBArr[i] < 255) {
        consts.arr.colorBArr[i] += 1;
      }
      if (consts.arr.colorAArr[i] < 1) {
        consts.arr.colorAArr[i] += 0.02;
      }
      if (consts.arr.degArr[i] <= 180 && consts.arr.degArr[i] > 0) {
        consts.arr.degArr[i]--
      } else if (consts.arr.degArr[i] > 180 && consts.arr.degArr[i] < 360) {
        consts.arr.degArr[i] ++
      }
      myspan[i].style.left = consts.arr.leftarr[i] + 'px'
      myspan[i].style.top = consts.arr.toparr[i] + 'px'
      myspan[i].style.color = 'rgba(' + consts.arr.colorRArr[i] + ',' + consts.arr.colorGArr[i] + ',' + consts.arr.colorBArr[i] + ',' + consts.arr.colorAArr[i]
      myspan[i].style.transform = 'rotate(' + consts.arr.degArr[i] + 'deg)'
    }
    nextframe(this.move.bind(this))
  }
  stopJudege (obj, i) {
    console.log(i)
    if (obj['toparr'][i] == 0 && obj['leftarr'][i] == 0 && obj['degArr'][i] % 360 == 0 && obj['colorRAr'][i] == 255 && obj['colorGArr'][i] == 255 && obj['colorBArr'][i] == 255 && obj['colorAArr'][i] >= 1) {
      return 1;
    } else {
      return 0;
    }
  }
}
export default Flowtext
