let cube = () => {
  let box = document.getElementsByClassName('box')[0]
  let num = Math.random() * 360 | 0;
  box.style.transform = 'rotateZ(' + num + 'deg) rotateY(' + num + 'deg) rotateX(' + num + 'deg)'
}
export default cube
