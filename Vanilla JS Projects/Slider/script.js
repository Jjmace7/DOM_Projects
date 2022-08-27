const slider = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');

let counter = 0;
prevBtn.style.display = 'none';

slider.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
})

const slideImage = () => {

    if(counter < slider.length - 1) {
        nextBtn.style.display = 'inline-block';
    } else {
        nextBtn.style.display = 'none';
    }

    if (counter > 0) {
        prevBtn.style.display = 'inline-block';
    } else {
        prevBtn.style.display = 'none';
    }

    slider.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}

prevBtn.addEventListener('click', () => {
    counter--;
    slideImage();
});

nextBtn.addEventListener('click', () => {
    counter++;
    slideImage();
});