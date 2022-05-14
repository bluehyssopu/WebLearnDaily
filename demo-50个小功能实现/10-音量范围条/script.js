const range = document.getElementById('range')

range.addEventListener('input', (e) => {
    const value = +e.target.value
    const label = e.target.nextElementSibling

    // Window.getComputedStyle()方法返回一个对象，该对象在应用活动样式表   并解析这些值可能包含的  任何基本计算后 
    // 报告元素的所有CSS属性的值。 私有的CSS属性值可以通过对象提供的API或通过简单地使用CSS属性名称进行索引来访问。
    // CSSStyleDeclaration.getPropertyValue() 接口返回一个 DOMString ，其中包含请求的CSS属性的值。

    // 说白了 就是获取 音量条大小范围的一行代码
    const range_width = getComputedStyle(e.target).getPropertyValue('width')
    const label_width = getComputedStyle(label).getPropertyValue('width')

    const num_width = +range_width.substring(0, range_width.length - 2)
    const num_label_width = +label_width.substring(0, label_width.length - 2)

    const max = +e.target.max
    const min = +e.target.min

    const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10)

    label.style.left = `${left}px`


    label.innerHTML = value
})

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }