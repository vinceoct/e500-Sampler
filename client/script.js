let carousel = document.querySelector('.carousel')
let innerCarousel = document.querySelector('.inner-carousel')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
let slideWidth 
let currentIndex = 0

function updateCarousel() {
    slideWidth = innerCarousel.offsetWidth
    const maxIndex = Math.floor(innerCarousel.scrollWidth / slideWidth) - 1
    if (currentIndex > maxIndex) {
        currentIndex = maxIndex
    }
    moveCarousel()
}

prev.addEventListener('click', () => {
        currentIndex--
        if (currentIndex < 0) {
            currentIndex = 0
        }
        moveCarousel()
})

next.addEventListener('click', () => {
    if (currentIndex < 1) {
    currentIndex++
    } else if (currentIndex > 1) {
        return;
    }
    moveCarousel()
})

function moveCarousel() {
    const position = -currentIndex * (slideWidth / 2)
    innerCarousel.style.transition = 'transform .5s ease-in-out'
    innerCarousel.style.transform = `translateX(${position}px)`;
  }

window.addEventListener('resize', updateCarousel)

updateCarousel()
