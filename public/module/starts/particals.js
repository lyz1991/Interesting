class partical {
  constructor (x, y) {
    this.r = Math.random() * 255 | 0
    this.g = Math.random() * 255 | 0
    this.b = Math.random * 255 | 0
    this.R = Math.random() * 20
    this.x = Math.random() * 460 + 20
    this.y = Math.random() * 460 + 20
    this.vx = Math.random() * 10 + 5;
    this.vy = Math.random() * 10 + 5;
    this.color = 'rgba(' + this.r + ', ' + this.g + ', ' + this.b + ', 0.5)';
  }

}
export default partical