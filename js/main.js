// import images as relative image path won't work with vite/vercel.
import check from '../assets/check.svg'
import star from '../assets/star.svg'
import sushi12 from '../assets/sushi-12.png'
import sushi11 from '../assets/sushi-11.png'
import sushi10 from '../assets/sushi-10.png'

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});

//initialize responsive mobile menu on DOM load
document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
});

//short hand for document.querySelector
const $ = (selector) => document.querySelector(selector);

function initMobileMenu() {
  const toggleBtn = $("[data-menu-toggle]");
  const menu = $("[data-menu]");

  //if its empty then return without doing anything
  if (!toggleBtn || !menu) return;

  //listen for click event and toggle the menu open class
  toggleBtn.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("header__menu--open");
    toggleBtn.setAttribute("aria-expanded", isOpen);
  });
}