import { name, things, author } from './details.js'
export const str = `祝${name}${things}，开心永远! By ${author}`;
export let radio = document.getElementById('radio')
export let canvas = document.getElementById('mycanvas');
export let width = 800
export let height = 300;
export const ac = new (window.AudioContext || window.webkitAudioContext)()
export const analyser = ac.createAnalyser()
export let size = 32
export let fontwidth = 20
export let w = width / size
export let hradio = 512 // 频率，字的宽度，柱子距离，高度缩小比
export let topcolor = 'red'
export let midcolor = 'yellow'
export let bomcolor = 'green'
