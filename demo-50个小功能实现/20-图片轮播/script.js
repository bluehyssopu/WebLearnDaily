const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

// 选择id=imgs 下所有 的img标签
const img = document.querySelectorAll('#imgs img')

let idx = 0

let interval = setInterval(run, 2000)

function run() {
  idx++
  changeImage()
}

function changeImage() {
  if(idx > img.length - 1) {
    // rightBtn
    idx = 0
  } else if (idx < 0) {
    // leftBtn
    idx = img.length - 1
  }

  // 如果忽略px  轮播图不会正常运行
  imgs.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval() {
  // 初始化
  clearInterval(interval)
  interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
  idx++
  changeImage()
  resetInterval()
})

leftBtn.addEventListener('click', () => {
  idx--
  changeImage()
  resetInterval()
})