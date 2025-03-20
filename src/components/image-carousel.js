/* eslint-disable no-trailing-spaces */
// eslint-disable-next-line import/no-extraneous-dependencies
import 'normalize.css';
import '../styles.css';

class ImageCarousel {
  // constructor for ImageCarousel with buttons, indicator dots, and carousel
  constructor(nextButton, prevButton, track, dots, carousel) {
    this.nextButton = nextButton;
    this.prevButton = prevButton;
    this.track = track;
    this.dots = dots;
    this.carousel = carousel;
    this.slides = Array.from(track.children);
    this.currentIndex = 0;
    this.slideWidth = this.slides[0].getBoundingClientRect().width;
    this.autoSlideInterval = null;
    if (this.carousel) {
      this.init();
    }
  }

  init() {
    // Set up event listeners for buttons
    this.nextButton.addEventListener('click', () => this.nextSlide());
    this.prevButton.addEventListener('click', () => this.prevSlide());
 
    // Set up event listeners for dots
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.goToSlide(index));
    });
 
    // Start the automatic slideshow
    this.startAutoSlide();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.goToSlide(this.currentIndex);
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.goToSlide(this.currentIndex);
  }

  goToSlide(index) {
    // Move the track to the correct slide
    this.track.style.transform = `translateX(-${index * this.slideWidth}px)`;
    // Update the current index
    this.currentIndex = index;
    // Update the active dot
    this.updateDots();
    this.resetAutoSlide();
  }

  updateDots() {
    this.dots.forEach((dot, index) => {
      if (index === this.currentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  resetAutoSlide() {
    clearInterval(this.autoSlideInterval);
    this.startAutoSlide();
  }
}

// Initialize all carousels
const carousels = document.querySelectorAll('.carousel');
carousels.forEach((carousel) => {
  const nextButton = carousel.querySelector('.next');
  const prevButton = carousel.querySelector('.prev');
  const track = carousel.querySelector('.carousel-track');
  const dots = Array.from(carousel.querySelectorAll('.dot'));
  if (nextButton && prevButton && track && dots) {
    // eslint-disable-next-line no-new
    new ImageCarousel(nextButton, prevButton, track, dots, carousel);
  }
});

export default ImageCarousel;
