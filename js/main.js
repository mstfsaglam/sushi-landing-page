// import images as relative image path won't work with vite/vercel.
import check from '../assets/check.svg'
import star from '../assets/star.svg'
import sushi12 from '../assets/sushi-12.png'
import sushi11 from '../assets/sushi-11.png'
import sushi10 from '../assets/sushi-10.png'

import AOS, { init } from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});

//initialize responsive mobile menu on DOM load
document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initPopularCards();
});

//short hand for document.querySelector
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

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

// check mouse movement and click events on popular cards
function initPopularCards() {
  const cards = $$("[data-popular-card]");
  if (!cards.length) return;

  //find the default active card (middle one)
  const defaultIndex = Math.floor(cards.length / 2);
  let currentActive = cards[defaultIndex];

  //set the default active card
  setActiveCard(currentActive, cards);

  //add event listeners to each card
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      setActiveCard(card, cards);
    });

    card.addEventListener("mouseleave", () => {
      setActiveCard(currentActive, cards);
    });

    card.addEventListener("click", () => {
      currentActive = card;
      setActiveCard(card, cards);
    });
  });
}


//set the active class to the active card and remove from others
function setActiveCard(activeCard, allCards) {
  allCards.forEach((card) => card.classList.remove("active-card"));
  activeCard.classList.add("active-card");
}
