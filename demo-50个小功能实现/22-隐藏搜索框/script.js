const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

// 绑定事件 点击按钮后 给盒子添加active 同时 input的width变为 200px
btn.addEventListener('click', () => {
  search.classList.toggle('active')
  input.focus()
})