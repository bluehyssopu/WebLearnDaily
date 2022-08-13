const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4

  boxes.forEach(box => {
    // getBoundingClientRect用于获取某个html元素相对于视窗的位置集合。
    const boxTop = box.getBoundingClientRect().top

    // 比较 当前盒子距视窗顶部距离 与 视高*0.8 的大小
    if(boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}