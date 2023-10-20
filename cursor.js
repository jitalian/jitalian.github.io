const cursor = document.querySelector('.cursor');
const zoomElements = document.querySelectorAll(".cursor-zoom")
cursor.style.display = 'none'

if ('ontouchstart' in window) {
    document.querySelector('.cursor').style.display = 'none'
} else {
    document.addEventListener('mousemove', event => {
        cursor.style.display = 'block';
        cursor.style.left = event.clientX + 'px';
        cursor.style.top = event.clientY + 'px';
    })
}

zoomElements.forEach(element => {
    element.addEventListener('mouseover', event => {
        cursor.style.transform = 'scale(10)';
    })
    
    element.addEventListener('mouseout', event => {
        cursor.style.transform = 'scale(1)';
    })
})

const imageLinks = document.querySelectorAll('.image-link');
cursorText = document.querySelector('.image-text');

imageLinks.forEach(image => {
  image.addEventListener('mouseover', event => {
    cursor.style.mixBlendMode = 'normal'
    cursorText.innerText = "Click to Play!";
    cursor.style.opacity = "85%"
  });

  image.addEventListener('mouseout', event => {
    cursor.style.mixBlendMode = 'difference'
    cursor.style.backgroundColor = "white";
    cursorText.innerText = "";
  });
});

