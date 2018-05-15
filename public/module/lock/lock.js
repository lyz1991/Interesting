class Lock {
  constructor (id, maps) {
    this.canvas = document.getElementById('lock')
    this.ctx = this.canvas.getContext('2d')
    this.maps = maps
    this.records = []
    this.recordsT = []
    this.locked = false
    this.startX = null
    this.startY = null
    this.from = null
    this.left = this.canvas.getBoundingClientRect().left
    this.drawdots(this.maps)
    this.top = this.canvas.getBoundingClientRect().top

    this.bind()
  }
  drawdots (maps, first) {
    maps.forEach((dot) => {
      this.ctx.beginPath()
      this.ctx.arc(dot.x, dot.y, 5,0, Math.PI * 2, false)
      if (dot.state && !first) {
        this.ctx.save()
        this.ctx.strokeStyle = 'red'
      }
      this.ctx.stroke()
      this.ctx.closePath()
      this.ctx.restore()
    })
  }
  bind () {
    let state
    this.canvas.addEventListener('mousedown', (e) => {
      state = true
      this.startX = e.clientX
      this.startY = e.clientY
      this.ctx.moveTo(this.startX - this.left, this.startY- this.top)
    })
    this.canvas.addEventListener('mousemove', (e) => {
      if (state) {
        if (this.from) {

          this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
          this.drawrecords(this.locked ? this.recordsT : this.records)
          this.drawdots(this.maps)
          if (this.from) {
            this.ctx.moveTo(this.from.x, this.from.y)
          } else {
            this.ctx.moveTo(this.startX - this.left, this.startY- this.top)
          }
          this.ctx.lineTo(e.clientX - this.left, e.clientY - this.top)
          this.ctx.stroke()
        }
        this.checkDistance(e.clientX - this.left, e.clientY - this.top)
      }
    })
    document.addEventListener('mouseup', e => {
      state = false
      let recored = this.locked ? this.recordsT : this.records
      if (recored.length < 2) {
        this.locked ? this.recordsT = [] : this.records = []
        Lock.restore(this.maps)
        this.from = null
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
        this.drawdots(this.maps)
        return
      }
      this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
      this.drawrecords(recored)
      this.drawdots(this.maps)
    })
    document.querySelector('#locked').addEventListener('click', () => {
      if (this.records.length < 2) {
        return alert('请设置密码')
      }
      this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
      this.drawdots(this.maps, true)
      this.locked = true
      alert('设置成功')
      this.from = null
      Lock.restore(this.maps)

    })
    document.querySelector('#unlocked').addEventListener('click', () => {
      if (!Lock.compare(this.recordsT, this.records)) {
        this.recordsT = []
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.from = null
        Lock.restore(this.maps)
        this.drawdots(this.maps, true)
        return alert('密码错误')
      }
      return alert('密码破解')
    })
  }
  drawrecords (records) {
    for (let i = 0, len = records.length; i < len; i++) {
      if (records[i+1]) {
        this.ctx.beginPath()
        this.ctx.moveTo(records[i].x, records[i].y)
        this.ctx.lineTo(records[i+1].x, records[i+1].y)
        this.ctx.stroke()
        this.ctx.closePath()
      }
      this.ctx.beginPath()
      this.ctx.arc(records[i].x, records[i].y, 5,0, Math.PI * 2, false)
      this.ctx.save()
      this.ctx.strokeStyle = 'red'
      this.ctx.closePath()
      this.ctx.stroke()
      this.ctx.restore()
    }
  }
  checkDistance (x, y) {
    this.maps.forEach((dot) => {
      let distance = Math.sqrt((dot.x - x) * (dot.x - x) + (dot.y - y) * (dot.y - y))
      if (distance < 10) {
        dot.state = true
        this.ctx.beginPath()
        this.checkline(this.from, dot)
        this.ctx.arc(dot.x, dot.y, 5,0, Math.PI * 2, false)
        this.from = dot
        if (this.locked) {
          if (this.recordsT.indexOf(dot) == -1) {
            this.recordsT.push(dot)
          }
        } else {
          if (this.records.indexOf(dot) == -1) {
            this.records.push(dot)
          }
        }

        this.ctx.save()
        this.ctx.strokeStyle = 'red'
        this.ctx.closePath()
        this.ctx.stroke()
        this.ctx.restore()
      }
    })
  }
  static restore (maps) {
    maps.forEach(function (map) {
      map.state = false
    })
  }
  static compare (arr1, arr2) {
    if (arr1.length != arr2.length) {
      return false
    }
    for(let i = 0, len = arr1.length; i < len; i++) {
      if (arr1[i].x != arr2[i].x || arr1[i].y != arr2[i].y) {
        return false
      }
    }
    return true
  }
  checkline (from, dot) {
    let targetIndex = this.maps.indexOf(dot)
    let fromIndex = this.maps.indexOf(from)
    if (dot.should) {
      for (let i = 0, len = dot.should.length; i < len; i++) {
        if (dot.should[i].from == fromIndex) {
          let addcheck = this.maps[dot.should[i].addcheck]
          if (!addcheck.state) {
            this.stroke(addcheck)
          }
        }
      }
    }
  }
  stroke (dot) {
    dot.state = true
    if (!this.locked) {
      this.records.push(dot)
    } else {
      this.recordsT.push(dot)
    }
    this.ctx.beginPath()
    this.ctx.arc(dot.x, dot.y, 5,0, Math.PI * 2, false)
    this.ctx.save()
    this.ctx.strokeStyle = 'red'
    this.ctx.stroke()
    this.ctx.closePath()
    this.ctx.restore()
  }
}
