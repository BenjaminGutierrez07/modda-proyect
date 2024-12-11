const images = [
    'Img/tenis1.jpg',
    'Img/tenis2.jpg',
    'Img/tenis3.jpg'
];

const sliderImage = document.getElementById('slider');

let currentIndex = 0;

function changeImage() {
    currentIndex = (currentIndex+1) % images.length
    sliderImage.src = images[currentIndex];
}

setInterval(changeImage,5000);

changeImage();