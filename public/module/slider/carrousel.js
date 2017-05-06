class Carousel {
  constructor () {
    this.audio = document.getElementById('audio')
    this.img = document.getElementsByTagName('img');
    this.container = document.getElementsByClassName('container')[0]
    this.len = this.img.length
    this.deg = 360 / (this.len - 1);
    this.x = null
  }
  init () {
    setInterval(this.check.bind(this), 1000)
    this.lay().bind()
  }
  lay () {
    for (let i = 0; i < this.len - 1; i++) {
      this.img[i].style.transform = 'rotateY(' + i * this.deg + 'deg) translateZ(250px)'
    }
    return this
  }
  check () {
    let alltime = this.audio.duration;
    let ctinme = this.audio.currentTime;
    let radio = ctinme / alltime;
    let d = -360 * radio;
    this.container.style.transform = 'rotateY(' + d + 'deg)'
  }
  bind () {
    document.addEventListener('mousewheel', (event) => {
      let e = event || window.event;
      e.preventDefault();
      let delta = e.wheelDelta || -e.detail || -e.deltaY;
      if (delta < 0) {
        this.container.style.transform = 'rotateX(-30deg)'
      } else {
        this.container.style.transform = 'rotateX(30deg)'
      }
    }, false)
    document.addEventListener('mousedown', (e) => {
      this.x = e.clientX;
      this.state = true
    }
    )
    document.addEventListener('mousemove', (e) => {
      if (this.state) {
        this.mymove(e)
      }
    }
    )
    document.addEventListener('mouseup', () => {
      this.state = false
    })
    return this
  }
  mymove (e) {
    let _x = e.clientX;
    this.container.style.left = (this.x - _x) + 'px'
  }
}
export default Carousel

