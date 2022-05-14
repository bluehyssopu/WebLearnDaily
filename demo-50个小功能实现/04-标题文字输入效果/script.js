const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = '原来你也玩原神！'
let idx = 1
// 控制速度 
let speed = 300 / speedEl.value

writeText()

function writeText() {
    // 将标题文字切片 每次显示的长度增加1
    textEl.innerText = text.slice(0, idx)

    idx++

    // 当写入text的索引值 大于 text的长度时 初始化idx为1
    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => {
    speed = 300 / e.target.value
})