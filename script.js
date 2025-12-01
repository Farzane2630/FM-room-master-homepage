const menuHamIcon = document.querySelector(".nav__icon--open");
const navMenu = document.querySelector(".nav__list__container");
const closeMenuIcon = document.querySelector(".nav__icon--close");

menuHamIcon.addEventListener("click", () => {
  navMenu.classList.add("nav__list__container--show");
});

closeMenuIcon.addEventListener("click", () => {
  navMenu.classList.remove("nav__list__container--show");
});

// hero__nav__btn functions
// const htmlElement =
const leftBtn = document.querySelector(".hero__nav__btn--left");
const rightBtn = document.querySelector(".hero__nav__btn--right");
const heroDesktopImage = document.querySelector(".hero__desktop__img");
const heroMobileImage = document.querySelector(".hero__mobile__img");

const desktopImages = [
  "images/desktop-image-hero-1.jpg",
  "images/desktop-image-hero-2.jpg",
  "images/desktop-image-hero-3.jpg",
];

const mobileImages = [
  "images/mobile-image-hero-1.jpg",
  "images/mobile-image-hero-2.jpg",
  "images/mobile-image-hero-3.jpg",
];

// is mobile or desktop
const isDesktop = () => {
  return window.innerWidth > 560;
};

isDesktop();
const getCurrentImageIndex = () => {
  return isDesktop()
    ? desktopImages.indexOf(heroDesktopImage.getAttribute("srcset"))
    : mobileImages.indexOf(heroMobileImage.getAttribute("src"));
};

const btnHandler = (step) => {
  const currentImageIndex = getCurrentImageIndex();
  const total = mobileImages.length;

  /*
  below line makes sure to follow DRY and 
  also avoid long if/else checks.
  1. currentIndex + step: shifts the index forward or backward.
  Example: if currentIndex = 3 and step = 1, you get 4.

  2. + total: prevents negatives. 
  If you go back from 0 (0 + (-1) = -1), adding total (like 4) makes it 3 instead of -1.
  Example: -1 + 4 = 3.

  3. % total: wraps around the number so it always stays within 0 … total-1.
  Example: (4) % 4 = 0, (3) % 4 = 3.
  */
  const imageIndex = (currentImageIndex + step + total) % total;

  if (isDesktop()) {
    heroDesktopImage.setAttribute("srcset", desktopImages[imageIndex]);
  } else {
    heroMobileImage.setAttribute("src", mobileImages[imageIndex]);
  }
};

rightBtn.addEventListener("click", () => btnHandler(+1));
leftBtn.addEventListener("click", () => btnHandler(-1));
