const carouselImg = document.querySelector('.carousel-img');
const slides = document.querySelectorAll('.carousel-img');

const imgArray = [
  './assets/imgs/enigma-01.jpg',
  './assets/imgs/enigma-02.jpg',
  './assets/imgs/enigma-03.jpg',
];

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
