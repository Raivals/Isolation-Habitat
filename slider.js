const track = document.querySelector('.slider-track');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');

let index = 0;

const images = document.querySelectorAll('.slider-track img');
const total = images.length;

function updateSlider() {
    track.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    index = (index + 1) % total;
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + total) % total;
    updateSlider();
});