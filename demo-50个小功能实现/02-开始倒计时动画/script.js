const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')

runAnimation()

function resetDOM() {
    // 使用元素的 classList 属性可以访问或添加、删除及修改元素的 class 属性。需注意的是，支持 classList 属性的浏览器主要是一些较新版的，例如：IE10+、Firefox3.6+。使用 classList 属性访问 class 属性的格式如下：element.classList

    // classList 是一个只读属性，其返回的值为 DOMTokenList，其中包含了元素的所有 class 属性，不同的 class 属性之间使用一空格分隔。

    //  classList 调用 add()、remove() 和 toggle() 等方法可以添加、移除或修改元素 class 属性
    counter.classList.remove('hide')
    finalMessage.classList.remove('show')

    nums.forEach((num) => {
        num.classList.value = ''
    })
    nums[0].classList.add('in')
}

function runAnimation() {
    nums.forEach((num, idx) => {
        const nextToLast = nums.length - 1
        // nextElementSibling 返回当前元素在其父元素的子元素节点中的后一个元素节点,如果该元素已经是最后一个元素节点,则返回null,该属性是只读的.
        num.addEventListener('animationend', (e) => {
            if (e.animationName === 'goIn' && idx !== nextToLast) {
                num.classList.remove('in')
                num.classList.add('out')
            } else if (e.animationName === 'goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in')
            } else {
                // 隐藏计数 显示replay按钮
                counter.classList.add('hide')
                finalMessage.classList.add('show')
            }
        })
    })
}

replay.addEventListener('click', () => {
    resetDOM()
    runAnimation()
})
