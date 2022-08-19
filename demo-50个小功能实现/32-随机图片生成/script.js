const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random/'
const rows = 5

// 调用随机图片的api 展示 5*3 张图片
for(let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img')
    img.src = `${unsplashURL}${getRandomSize()}`
    container.appendChild(img)
    // console.log(img.src);
}

function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()}`
}

function getRandomNr() {
      // 随机生成一个 300+ * 300+ 大小的图片索引
    return Math.floor(Math.random() * 10) + 300
}