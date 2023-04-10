// 获取页面中的元素，如屏幕、选择昆虫按钮、开始按钮、游戏容器、时间、分数和消息。
const screens = document.querySelectorAll('.screen');
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn');
const start_btn = document.getElementById('start-btn')
const game_container = document.getElementById('game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')
let seconds = 0
let score = 0
let selected_insect = {}

// 监听事件 开始游戏 滑动页面为第二个（选择虫子页面）选择后开始游戏 
start_btn.addEventListener('click', () => screens[0].classList.add('up'))

choose_insect_btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const img = btn.querySelector('img')
    const src = img.getAttribute('src')
    const alt = img.getAttribute('alt')
    selected_insect = { src, alt }
    screens[1].classList.add('up')
    setTimeout(createInsect, 1000)
    startGame()
  })
})

function startGame() {
  setInterval(increaseTime, 1000)
}

// 计时函数
function increaseTime() {
  let m = Math.floor(seconds / 60)
  let s = seconds % 60
  m = m < 10 ? `0${m}` : m
  s = s < 10 ? `0${s}` : s
  timeEl.innerHTML = `Time: ${m}:${s}`
  seconds++
}

// 生成虫子函数 生成随机位置及随机角度 将包含虫子的盒子作为insect盒子的子元素添加进去
function createInsect() {
  const insect = document.createElement('div')
  insect.classList.add('insect')
  const { x, y } = getRandomLocation()
  insect.style.top = `${y}px`
  insect.style.left = `${x}px`
  insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform: rotat(${Math.random() * 360}deg)" />`

  insect.addEventListener('click', catchInsect)

  game_container.appendChild(insect)
}

function getRandomLocation() {
  const width = window.innerWidth
  const height = window.innerHeight
  const x = Math.random() * (width - 200) + 100
  const y = Math.random() * (height - 200) + 100
  return { x, y }
}

// 抓虫子 点击后score加一 当前虫子缩放为0% 2秒钟移除该盒子 设置定时器增加两个虫子(1秒后、1.5秒后)
function catchInsect() {
  increaseScore()
  this.classList.add('caught')
  setTimeout(() => this.remove(), 2000)
  addInsects()
}

function addInsects() {
  setTimeout(createInsect, 1000)
  setTimeout(createInsect, 1500)
}

// 当玩家得分超过一定数量(19)，将消息显示在屏幕上。
function increaseScore() {
  score++
  if(score > 19) {
    message.classList.add('visible')
  }
  scoreEl.innerHTML = `Score: ${score}`
}