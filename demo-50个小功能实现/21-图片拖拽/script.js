//  仅使用html和css 只能实现图片的拖动效果 但不能放置到指定拖动的容器内

// 实质上是 一堆空盒子 当拖拽的图片在某一盒子上松开按键后  给当前盒子添加子盒子 以容纳图片 其余初始化
const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for(const empty of empties) {
  empty.addEventListener('dragover', dragOver)
  empty.addEventListener('dragenter', dragEnter)
  empty.addEventListener('dragleave', dragLeave)
  empty.addEventListener('drop', dragDrop)
}

// dragstart 当用户开始拖动一个元素或者一个选择文本的时候 dragstart 事件就会触发。
// dragend 拖放事件在拖放操作结束时触发(通过释放鼠标按钮或单击escape键)。
// dragover 当元素或者选择的文本被拖拽到一个有效的放置目标上时，触发 dragover 事件(每几百毫秒触发一次)。这个事件在可被放置元素的节点上触发。
// dragenter 当拖动的元素或被选择的文本进入有效的放置目标时， dragenter 事件被触发。

function dragStart() {
  this.className += ' hold'
  setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
  this.className = 'fill'
}

// Event 接口的 preventDefault()方法，告诉user agent：
// 如果此事件没有被显式处理，它默认的动作也不应该照常执行。此事件还是继续传播，除非碰到事件侦听器调用stopPropagation() 或stopImmediatePropagation()，才停止传播。

// 如果不添加该方法  图片执行默认操作（回到原来的盒子内）
function dragOver(e) {
  // console.log('dragover触发');
  e.preventDefault()
}

function dragEnter(e) {
  // console.log('dragenter触发');
  e.preventDefault()
  this.className += ' hovered'
}

function dragLeave() {
  // console.log('dragleave触发');
  this.className = 'empty'
}

function dragDrop() {
  // console.log('dragdrop触发');
  this.className = 'empty'
  this.append(fill)
}