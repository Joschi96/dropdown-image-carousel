// eslint-disable-next-line import/no-extraneous-dependencies
import 'normalize.css';
import '../styles.css';

class Dropdown {
  constructor(button, menu) {
    this.button = button;
    this.menu = menu;
    if (this.button && this.menu) {
      this.init();
    }
  }

  init() {
    this.button.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent click from reaching window event listener
      this.toggleDropdown();
    });

    window.addEventListener('click', (event) => {
      if (!this.button.contains(event.target) && !this.menu.contains(event.target)) {
        this.closeDropdown();
      }
    });
  }

  toggleDropdown() {
    this.menu.classList.toggle('show');
  }

  closeDropdown() {
    this.menu.classList.remove('show');
  }
}

// Initialize all dropdowns
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach((dropdown) => {
  const button = dropdown.querySelector('.dropdown-btn.click');
  const menu = dropdown.querySelector('.dropdown-menu-click');
  if (button && menu) {
    // eslint-disable-next-line no-new
    new Dropdown(button, menu);
  }
});
