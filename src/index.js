// eslint-disable-next-line import/no-extraneous-dependencies
import 'normalize.css';
import './styles.css';

// collect all the buttons
const buttonCl = document.querySelector('.click');
const buttonHover = document.querySelector('.hover');
const buttonOutside = document.querySelector('.click-outside');

// collect all dropdown menus
const dropdownCl = document.querySelector('.dropdown-menu-click');
const dropdownHover = document.querySelector('.dropdown-menu-hover');
const dropdownOutside = document.querySelector('.dropdown-menu-click-outside');

function handleButtonClick() {
  dropdownCl.classList.toggle('show');
}

buttonCl.addEventListener('click', handleButtonClick);
