const menuHamIcon = document.querySelector(".nav__menu__icon")
const navMenu = document.querySelector(".nav__list")
const closeMenuIcon = document.querySelector(".nav__close__icon")


menuHamIcon.addEventListener("click", ()=>{
   navMenu.classList.add("nav__list--show")
})

closeMenuIcon.addEventListener("click", ()=>{
   navMenu.classList.remove("nav__list--show")
})
