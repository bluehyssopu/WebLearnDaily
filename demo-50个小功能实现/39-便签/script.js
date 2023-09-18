const addBtn = document.getElementById('add')

const notes = JSON.parse(localStorage.getItem('notes'))

if(notes) {
  notes.forEach(note => addNewNote(note))
}

addBtn.addEventListener('click', () => addNewNote())

function addNewNote(text = '') {
  const note = document.createElement('div')
  note.classList.add('note')

  note.innerHTML = `
  <div class="tools">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
  </div>

  <div class="main ${text ? "" : "hidden"}"></div>
  <textarea class="${text ? "hidden" : ""}"></textarea>
  `

  const editBtn = note.querySelector('.edit')
  const deleteBtn = note.querySelector('.delete')
  const main = note.querySelector('.main')
  const textArea = note.querySelector('textarea')

  textArea.value = text
  main.innerHTML = marked(text)

  deleteBtn.addEventListener('click', () => {
    note.remove()

    updateLS()
  })

  editBtn.addEventListener('click', () => {
    // 切换元素的可见性 无需手动添加或移除相应的类
    // toggle 对应盒子的属性 有则隐藏 无则添加
    main.classList.toggle('hidden')
    textArea.classList.toggle('hidden')
  })

  // 通过 e.target 获取到触发事件的具体元素。而解构赋值的语法 const { value } 就是从该目标元素中提取出value属性，并将其赋值给变量value。

  // 该操作常用于表单元素等需要获取用户输入的场景，通过获取value属性的值，可以获取到用户在输入框中输入的内容或其他表单元素的值。
  textArea.addEventListener('input', (e) => {
    const { value } = e.target

    main.innerHTML = marked(value)

    updateLS()
  })

  document.body.appendChild(note)
}

function updateLS() {
  const notesText = document.querySelectorAll('textarea')

  const notes = []

  notesText.forEach(note => notes.push(note.value))

  localStorage.setItem('notes', JSON.stringify(notes))
}