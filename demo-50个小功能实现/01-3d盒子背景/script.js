const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))

function createBoxes() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 5; j++) {
            const box = document.createElement('div')
            box.classList.add('box')
            // 每个小盒子显示图片一个小角 图片移动盒子定长倍数 由下一个盒子显示
            box.style.backgroundPosition = `${-j * 170}px ${-i * 125}px`
            boxesContainer.appendChild(box)
        }        
    }
}

createBoxes()