const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = '满意'

// demo-14 卡片展开的思路 适用demo-15
// 选择所有的反馈信息盒子 点击哪个 全部取消active当前点击项设为active
ratings.forEach(rating => {
  rating.addEventListener('click', (e) => {
    removeActiveClasses()
    rating.classList.add('active')
    // 选中点击rating盒子 第二个子元素的文本值（评价等级）
    selectedRating = rating.firstElementChild.nextElementSibling.innerHTML
  })
})

function removeActiveClasses() {
  ratings.forEach(rating => {
    rating.classList.remove('active')
  })
}

sendBtn.addEventListener('click', (e) => {
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>谢谢您的反馈</strong>
    <br>
    <strong>评价：${selectedRating}</strong>
    <p>我们将会进一步提高我们的客户体验</p>
  `
})

// demo-15 用户体验反馈 源仓库思路
// ratingsContainer.addEventListener('click', (e) => {
//   if(e.target.parentNode.classList.contains('rating') && e.target.nextElementSibling) {
//     removeActive()
//     e.target.parentNode.classList.add('active')
//     selectedRating = e.target.nextElementSibling.innerHTML
//   } else if(
//     e.target.parentNode.classList.contains('rating') && 
//     e.target.previousSibling && 
//     e.target.previousElementSibling.nodeName === 'IMG'
//   ) {
//     removeActive()
//     e.target.parentNode.classList.add('active')
//     selectedRating = e.target.innerHTML
//   }
// })

// sendBtn.addEventListener('click', (e) => {
//   panel.innerHTML = `
//     <i class="fas fa-heart"></i>
//     <strong>谢谢您的反馈</strong>
//     <br>
//     <strong>评价：${selectedRating}</strong>
//     <p>我们将会进一步提高我们的客户体验</p>
//   `
// })

// function removeActive() {
//   for(let i = 0; i < ratings.length; i++) {
//       ratings[i].classList.remove('active')
//   }
// }
