class Slider {
  constructor (t) {
    this.t = t
    this.num = 0;
    this.go = $('#go')
    this.prev = $('#prev')
    this.oneleft = parseInt($('img').css('margin-left')) + $('img').width()
    this.container = $('.container')
  }
  init () {
    this.bind()
    this.timer = setInterval(this.auto.bind(this), this.t);
  }
  bind () {
    this.go.click(() => {
      this.num++;
      if (this.num > 11) {
        this.container.css('left', 0);
        this.num = 1
      }
      this.container.stop().animate({left: -this.num * this.oneleft + 'px'});
    })
    this.prev.click(() => {
      this.num--;
      if (this.num < 0) {
        this.container.css('left', -this.oneleft * 11 + 'px');
        this.num = 10
      }
      this.container.stop().animate({left: -this.num * this.oneleft + 'px'});
    })
    $('#go, #prev, img').hover(() => {
      clearInterval(this.timer)
      this.timer = null
    }, () => {
      this.timer = setInterval(this.auto.bind(this), this.t);
    })
  }
  auto () {
    this.go.trigger('click')
  }
}
export default Slider
