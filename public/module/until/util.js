export const nextframe = (function () {
  return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) { return setTimeout(callback, 1000 / 64) }
})()
export const radomcolor = () => {
  return '#' + Math.floor(Math.random() * 16777)
}
export const distance = (x, y, x1, y1) => {
  return Math.sqrt(Math.pow(x - x1, 2) + Math.pow(y - y1, 2))
}
