// 用于显示用户列表
const result = document.getElementById('result')
// 用于获取搜索词
const filter = document.getElementById('filter')
// 存储用户列表的每个 li 元素
const listItems = []

getData()

// 添加输入事件监听器 输入时调用 filterData 函数进行过滤
filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
  // 通过 fetch 函数从目标 url 获取随机用户数据。
  const res = await fetch('https://randomuser.me/api?results=50')
  // 返回的数据 解构赋值给 results
  const { results } = await res.json()

  // result 初始化
  result.innerHTML = ''

  // 将获取到的用户数据渲染在页面上，每个用户显示头像、姓名和所在城市、国家。
  results.forEach(user => {
    const li = document.createElement('li')

    listItems.push(li)

    li.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.first}">
      <div class="user-info">
          <h4>${user.name.first} ${user.name.last}</h4>
          <p>${user.location.city}, ${user.location.country}</p>
      </div>
    `

    result.appendChild(li)
  })
}

// 根据搜索词过滤用户列表
function filterData(searchTerm) {
  listItems.forEach(item => {
    // 包含搜索词 移除 hide 类 显示该元素
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide')
    } else {
      item.classList.add('hide')
    }
  })
}