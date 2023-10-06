const cursor = document.querySelector('.cursor');
cursor.style.display = 'none'
document.addEventListener('mousemove', (e) => {
    cursor.style.display = 'block';
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
})