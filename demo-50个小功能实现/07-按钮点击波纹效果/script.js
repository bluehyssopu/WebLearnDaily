const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const x = e.clientX
        const y = e.clientY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        // 获取点击位置的坐标 计算得到 在 button内的坐标(点距button上边框的距离, 点距button左边框的距离)
        // 为button增加类名为circle的span标签 标签的样式为圆 设置圆放大 边框逐渐透明的动画
        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.left = xInside + 'px'
        circle.style.top = yInside + 'px'

        this.appendChild(circle)
        setTimeout(() => circle.remove(), 500)
    })
})