class Maze {
  constructor (num) {
    this.maze = document.getElementById('maze')
    this.ctx = this.maze.getContext('2d')
    this.maze.width = num * num
    this.maze.height = num * num
    this.num = num
    this.rooms = []
    this.visited = [1]
    this.froms = [1]
    this.index = 0
    for (let i = 0; i < num * num; i++) {
      this.rooms[i + 1] = {
        left: 1,
        top: 1,
        bottom: 1,
        right: 1,
        visit: false
      }
    }
    this.rooms[1].visit = true
    this.begin()
  }
  selecwall (i) {
    let near = this.nearroom(i)
    if (near.visit) {
      this.index = Math.random() * (this.froms.length - 1) | 0
      return
    }
    this.hitwall(i, near.dirarr[Math.random() * near.dirarr.length | 0])
  }
  nearroom (i) {
    let top, left, right, bottom, dir = []
    if (i - this.num <= 0 || this.rooms[i - this.num].visit) {
      top = true
    } else {
      dir.push('top')
    }
    if ((i - 1) % this.num == 0 || this.rooms[i - 1].visit) {
      left = true
    } else {
      dir.push('left')
    }
    if (i % this.num == 0 || this.rooms[i + 1].visit) {
      right = true
    } else {
      dir.push('right')
    }
    if (i + this.num > this.num * this.num || this.rooms[i + this.num] .visit) {
      bottom = true
    } else {
      dir.push('bottom')
    }
    if (left && top && right && bottom) {
      return {visit: true}
    } else {
      return {dirarr: dir}
    }
  }
  hitwall (i, dir) {
    let nextroom, nextwall
    switch (dir) {
      case 'top':
        nextroom = i - this.num
        nextwall = 'bottom'
        break
      case 'left':
        nextroom = i - 1
        nextwall = 'right'
        break
      case 'right':
        nextroom = i + 1
        nextwall = 'left'
        break
      case 'bottom':
        nextroom = i + this.num
        nextwall = 'top'
        break
    }
    this.rooms[i][dir] = 0
    this.rooms[nextroom][nextwall] = 0
    this.rooms[nextroom].visit = true
    if(!this.nearroom(nextroom).visit){
      this.froms.push(nextroom)
      this.index++
    }
    if (this.visited.indexOf(nextroom) == -1) {
      this.visited.push(nextroom)
    }
  }
  draw (room) {
    for (let i = 1; i < room.length; i++) {
      let row = Math.ceil(i / this.num) - 1
      let column = i % this.num === 0 ? (i - 1) % this.num + 1 : i % this.num
      if (this.rooms[i].top) {
        this.ctx.moveTo((column - 1) * this.num, row * this.num)
        this.ctx.lineTo(column * this.num, row * this.num)
      }
      if (this.rooms[i].right) {
        this.ctx.moveTo(column * this.num, row * this.num)
        this.ctx.lineTo(column * this.num, (row + 1) * this.num)
      }
      if (this.rooms[i].left) {
        this.ctx.moveTo((column - 1) * this.num, row * this.num)
        this.ctx.lineTo((column - 1) * this.num, (row + 1) * this.num)
      }
      if (this.rooms[i].bottom) {
        this.ctx.moveTo((column - 1) * this.num, (row + 1) * this.num)
        this.ctx.lineTo(column * this.num, (row + 1) * this.num)
      }
    }
    this.ctx.stroke()
  }
  begin () {
    while (this.visited.length != this.num * this.num) {
      this.selecwall(this.froms[this.index])
    }
    this.draw(this.rooms)
  }
}
export default Maze