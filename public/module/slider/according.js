class According {
  constructor () {
    this.li = $('.aa li')
    this.len = this.li.length
    this.doot = $('.doot')
    this.begin = 0
    this.timer = null
  }
  init () {
    this.li.each((n, ele) => {
      $(ele).css('right', n * 30 + 'px')
    })
    this.bind()
    this.loop()
  }
  go (dom, idx) {
    $(dom).css({'right': idx * 30 + 'px'})
    for (let i = 0; i < this.len; i++) {
      if (i > idx) {
        this.li.eq(i).css({'right': 404 + 30 * i + 'px'})
      } else if (i < idx) {
        this.li.eq(i).css({'right': i * 30 + 'px'})
      }
    }
  }
  bind () {
    let self = this
    this.li.click(function () {
      let idx = $(this).index()
      self.begin = self.len - idx - 1
      self.doot.eq(self.len - idx - 1).addClass('active').siblings().removeClass('active')
      self.go(this, idx)
    })
    this.doot.click(function () {
      let idx = $(this).index('.doot')
      let imgidx = self.len - idx - 1;
      self.begin = idx
      $(this).addClass('active').siblings().removeClass('active');
      self.go(self.li.eq(imgidx)[0], imgidx)
    })
    this.doot.hover(() => {
      clearInterval(this.timer)
    }, () => {
      this.loop()
    })
    this.li.hover(() => {
      clearInterval(this.timer)
    }, () => {
      this.loop()
    })
  }
  loop () {
    this.timer = setInterval(() => {
      this.begin++
      if (this.begin > this.len - 1) {
        this.begin = 0
      }
      this.doot.eq(this.begin).trigger('click')
    }, 1000)
  }
}
export default According
