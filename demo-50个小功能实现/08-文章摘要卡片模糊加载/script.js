const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '<img src="https://vip2.loli.io/2022/05/10/Hy8SzXFun15OQTc.jpg" alt="" />'
    title.innerHTML = 'Vue.js 入门教程'
    excerpt.innerHTML = 'Vue 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。'
    profile_img.innerHTML = '<img src="https://vip2.loli.io/2022/05/10/TrnJaD8stY7vugx.jpg" alt="" />'
    name.innerHTML = 'Evan You'
    date.innerHTML = 'Mar 20, 2022'

    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}