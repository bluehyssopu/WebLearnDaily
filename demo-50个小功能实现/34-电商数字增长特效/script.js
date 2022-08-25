const counters = document.querySelectorAll(".counter")
// 在html中给定确定的 粉丝数值

// 然后 每秒增加固定值(target / 200)
counters.forEach((counter) => {
  counter.innerText = "0"

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target")
    const c = +counter.innerText

    // 12000 / 200 = 60
    // 5000 / 200 = 25
    // 7500 / 200 = 37.5 向上取整 38
    const increment = target / 200

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`
      setTimeout(updateCounter, 1)
    } else {
      counter.innerText = target
    }
  }

  updateCounter()
})
