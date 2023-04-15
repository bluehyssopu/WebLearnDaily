// 获取 HTML 中的表单、输入框和待办事项列表元素。
const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')
// 读取本地存储的待办事项列表 转换为 JavaScript 对象
const todos = JSON.parse(localStorage.getItem('todos'))

// 将本地数据添加到页面li中
if(todos) {
  todos.forEach(todo => addTodo(todo))
}

// 监听表单提交事件 阻止默认行为 添加到li中
form.addEventListener('submit', (e) => {
  e.preventDefault()

  addTodo()
})

// 将读取的 input/localStorage 赋值给 todoText; 创建li并赋值内容
function addTodo(todo) {
  let todoText = input.value

  if(todo) {
    todoText = todo.text
  }

  if(todoText) {
    const todoEl = document.createElement('li')
    if(todo && todo.completed) {
      todoEl.classList.add('completed')
    }

    todoEl.innerText = todoText
    // 监听点击事件; 更新本地存储中的待办事项列表
    todoEl.addEventListener('click', () => {
      todoEl.classList.toggle('completed')
      updateLS()
    }) 

    todoEl.addEventListener('contextmenu', (e) => {
      e.preventDefault()

      todoEl.remove()
      updateLS()
    }) 

    todosUL.appendChild(todoEl)

    input.value = ''

    updateLS()
  }
}

// 从列表中获取所有待办事项，并将其转换为 JavaScript 对象，以便将其存储在本地存储中
function updateLS() {
  todosEl = document.querySelectorAll('li')

  const todos = []

  todosEl.forEach(todoEl => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains('completed')
    })
  })

  localStorage.setItem('todos', JSON.stringify(todos))
}