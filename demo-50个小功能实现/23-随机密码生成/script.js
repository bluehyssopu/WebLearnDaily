// 结果
const resultEl = document.getElementById('result')
// 密码格式设置
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const symbolsEl = document.getElementById('symbols')
const numbersEl = document.getElementById('numbers')
// 生成按钮
const generateEl = document.getElementById('generate')
// 复制按钮
const clipboardEl = document.getElementById('clipboard')

// 生成随机数
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}

// 将生成的随机数构建成密码
function generatedPassword(lower, upper, number, symbol, length) {
  let generatedPassword = ''
  const typesCount = lower + upper + number + symbol
  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])

  if(typesCount === 0) {
    return ''
  }

  for(let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0]
      generatedPassword += randomFunc[funcName]()
    })
  }

  const finalPassword = generatedPassword.slice(0, length)

  return finalPassword
}

function getRandomLower() {
  // String.fromCharCode() 接受一个指定的Unicode值，然后返回一个字符串。
  // Math.floor() 返回小于或等于一个给定数字的最大整数 即向下取整
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97))
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
  // 这里打表 按下标取符号
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)]
}

// 两个按钮的监听
clipboardEl.addEventListener('click', () => {
  // 创建一个文本域 赋值为已经生成的密码 调用select方法 用于选择该元素中的文本。
  const textarea = document.createElement('textarea')
  const password = resultEl.innerText

  if(!password) { return }

  textarea.value = password
  document.body.appendChild(textarea)
  textarea.select()
  // copy
  // 拷贝当前选中内容到剪贴板。启用这个功能的条件因浏览器不同而不同，而且不同时期，其启用条件也不尽相同。使用之前请检查浏览器兼容表，以确定是否可用。
  // 需要注意 document.execCommand方法已废弃  Try to avoid using it.
  document.execCommand('copy')
  // 复制成功后 删除该元素
  textarea.remove()
  alert('密码成功复制至剪贴板！')
})

generateEl.addEventListener('click', () => {
  const length = +lengthEl.value
  const hasLower = lowercaseEl.checked
  const hasUpper = uppercaseEl.checked
  const hasNumber = numbersEl.checked
  const hasSymbol = symbolsEl.checked

  resultEl.innerText = generatedPassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})