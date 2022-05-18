const panels = document.querySelectorAll('.panel')
// 点击其中一副图片后 所有图片移除active类名 给选中图片添加active类名
panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
})

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}