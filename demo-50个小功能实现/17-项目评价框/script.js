const toogles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

toogles.forEach(toogle => toogle.addEventListener('change', (e) => doTheTrick(e.target)))

// 三者不能同时兼备 这不符合项目的特点
function doTheTrick(theClickedOne) {
  if(good.checked && cheap.checked && fast.checked) {
    if(good === theClickedOne) {
      fast.checked = false
    }

    if(cheap === theClickedOne) {
      good.checked = false
    }

    if(fast === theClickedOne) {
      cheap.checked = false
    }
  }
}