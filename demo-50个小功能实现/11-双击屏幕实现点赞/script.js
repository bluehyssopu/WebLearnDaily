const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0

// 如果函数报错 可能是将Date 写成了 Data
// 注意括号组合 不要配对 包裹错误

// 给图片点击两次绑定事件
loveMe.addEventListener('click', (e) => {
    if(clickTime === 0) {
        clickTime = new Date().getTime()
    } else {
        if((new Date().getTime() - clickTime) < 800) {
            createHeart(e)
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
        }
    }
})

// 经典板子 计算小心心出现的位置 后期可以封装成pos函数
// 如果不熟悉的话 可以看看这篇 http://c.biancheng.net/view/5960.html
const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

    // es6中新增的字符串方法 
    // 在实际开发中我们用其代替以前传统复杂的 引号双引号与+的拼接（看过黑马老教程的应该熟悉） 简洁明了
    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveMe.appendChild(heart)

    times.innerHTML = ++timesClicked

    setTimeout(() => heart.remove(), 1000)
}