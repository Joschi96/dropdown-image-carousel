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
    const nextIndex = this.currentIndex + 1;
    this.goToSlide(nextIndex);
  }

  prevSlide() {
    const prevIndex = this.currentIndex - 1;
    this.goToSlide(prevIndex);
  }

  goToSlide(index) {
    // Move the track to the correct slide
    this.track.style.transform = `translateX(-${index * this.slideWidth}px)`;
    // Update the current index
    this.currentIndex = index;
    // Update the active dot
    this.updateDots();
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

  stopAutoSlide() {
    clearInterval(this.autoSlideInterval);
    this.startAutoSlide();
  }
}

export default ImageCarousel;