/**
 * Created by lyz on 2016-08-28.
 */
class oneecol {
  constructor () {
    this.img = document.getElementsByTagName('img')
    this.len = this.img.length
    this.mid = this.len / 2 | 0
    this.width = window.innerWidth
    this.p = document.getElementsByTagName('p')[0]
  }
  init () {
    for (let i = 0; i < this.len; i++) {
      this.img[i].style.left = this.width / 2 - 100 - 100 * (5 - i) + 'px'
    }
    this.bind().lay(this.mid)
    return this
  }
  lay (mid) {
    for (var i = 0; i < this.len; i++) {
      if (i === this.mid) {
        this.img[i].style.transform = 'translateZ(20px)'
      } else if (i < this.mid) {
        this.img[i].style.transform = 'translateZ(' + (this.mid - i) * (-20) + 'px)'
      } else {
        this.img[i].style.transform = 'translateZ(' + (i - this.mid) * (-20) + 'px)'
      }
    }
    this.p.innerHTML = this.img[this.mid].getAttribute('alt')
    return this
  }
  bind () {
    document.getElementById('prev').addEventListener('click', () => {
      if (!this.mid) {
        return false;
      }
      this.mid --;
      this.lay(this.mid);
    })
    document.getElementById('go').addEventListener('click', () => {
      if (this.mid === this.len - 1) {
        return false
      }
      this.mid ++;
      this.lay(this.mid);
    })
    Array.from(this.img).forEach((ele, i) => {
      ele.addEventListener('click', () => {
        this.lay(this.mid = i)
      })
    })
    return this
  }
}
export default oneecol
