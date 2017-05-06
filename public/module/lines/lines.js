import {nextframe} from 'util'
class Line {
  constructor (num) {
    this.num = num
    this.vecters = []
    let canvas = document.getElementById('line')
    this.ctx = canvas.getContext('2d')
    this.w = canvas.width = window.innerWidth
    this.h = canvas.height = window.innerHeight
    while (this.num) {
      let vecter = {x: Math.random() * this.w, y: Math.random() * this.h, cx: Math.random() * 4 - 2, cy: Math.random() * 4 - 2}
      this.vecters.push(vecter)
      this.num --
    }
    this.circle(this.vecters)
    this.begin()
  }
  circle (arr) {
    this.ctx.fillStyle= 'black'
    for (let i = 0; i < arr.length; i++) {
      this.ctx.beginPath()
      this.ctx.arc(arr[i].x, arr[i].y, Math.random() * 2, 0, Math.PI * 2)
      this.ctx.fill()
    }
  }
  sport (arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i].x += arr[i].cx
      arr[i].y += arr[i].cy
      if (arr[i].x > this.w || arr[i].x < 0) {
        arr[i].cx *= -1
      }
      if (arr[i].y > this.h || arr[i].y < 0) {
        arr[i].cy *= -1
      }
      for (let j = i + 1; j < arr.length; j++) {
        if ((arr[j].x - arr[i].x) * (arr[j].x - arr[i].x) +(arr[j].y - arr[i].y) * (arr[j].y - arr[i].y) < 1000) {
          this.ctx.beginPath()
          let fillstyle = this.ctx.createLinearGradient(arr[j].x, arr[j].y, arr[i].x, arr[i].x)
          fillstyle.addColorStop(0.3, 'blue')
          fillstyle.addColorStop(0.5,'white')
          fillstyle.addColorStop(0.9, 'yellow')
          this.ctx.strokeStyle = fillstyle
          this.ctx.moveTo(arr[i].x, arr[i].y)
          this.ctx.lineTo(arr[j].x,arr[j].y)
          this.ctx.stroke()
        }
      }
    }
    this.circle(arr)
  }
  begin () {
    this.ctx.clearRect(0, 0, this.w, this.h)
    this.sport(this.vecters)
    nextframe(() => {
      this.begin()
    })

  }
}
export default Line