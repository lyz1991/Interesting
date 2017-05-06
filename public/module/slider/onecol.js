class oneecol {
  constructor () {
    this.img = document.getElementsByTagName('img')
    this.len = this.img.length
    this.mid = this.len / 2 | 0
    this.width = window.innerWidth
  }
  init () {
    for (let i = 0; i < this.len; i++) {
      this.img[i].style.left = this.width / 2 - 100 - 120 * (5 - i) + 'px'
      if (i > this.mid) {
        this.img[i].setAttribute('class', 'black')
      } else if (i < this.mid) {
        this.img[i].setAttribute('class', 'before')
      } else {
        this.img[i].setAttribute('class', 'now')
      }
    }
  }
}
export default oneecol
