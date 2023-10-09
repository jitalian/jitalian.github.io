const cursor = document.querySelector('.cursor');
cursor.style.display = 'none'

if ('ontouchstart' in window) {
    document.querySelector('.cursor').style.display = 'none'
} else {
    document.addEventListener('mousemove', (e) => {
        cursor.style.display = 'block';
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    })
}
