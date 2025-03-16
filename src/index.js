// eslint-disable-next-line import/no-extraneous-dependencies
import 'normalize.css';
import './styles.css';

class Dropdown {
  constructor(buttonSelector, menuSelector) {
    this.button = document.querySelector(buttonSelector);
    this.menu = document.querySelector(menuSelector);
    if (this.button && this.menu) {
      this.init();
    }
  }
}

init() {
  this.button.addEventListener('click', () => {
    Event.stopPropagation();
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

//Initialize all dropdown menus
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach((dropdown) => {
  const button = dropdown.querySelector('.dropdown-btn.click');
  const menu = dropdown.querySelector('.dropdown-menu-click');
  if (button && menu) {
    new Dropdown('.${button.classList[1]}','.${menu.classList[0]}');
  }
});

