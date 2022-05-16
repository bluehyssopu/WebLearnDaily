const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
    insert.innerHTML = `
    <div class="key">
    ${event.key === ' ' ? 'Space' : event.key}
    <small>按键名</small>
</div>
    
<div class="key">
    ${event.keyCode}
    <small>物理键对应值</small>
</div>

<div class="key">
    ${event.code}
    <small>键盘上的物理键</small>
</div>
    `
})