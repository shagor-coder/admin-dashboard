// Adding Active Class To all Active link

const navLinks = document.querySelectorAll('.nav-item')

const addHover = function () {
  navLinks.forEach((item) => {
    item.classList.remove('active')
    this.classList.add('active')
  })
}

navLinks.forEach((item) => {
  item.addEventListener('mouseenter', addHover)
})

// Menu Toggle

const menuToggler = document.querySelector('.toggler')
const sideBar = document.querySelector('.sidebar')
const mainHeader = document.querySelector('.header')
const main = document.querySelector('.main')
const logo = document.querySelector('.logo')

menuToggler.addEventListener('click', () => {
  sideBar.classList.toggle('active')
  mainHeader.classList.toggle('active')
  main.classList.toggle('active')
  logo.classList.toggle('active')
  // menuToggler.classList.toggle('active')
  // if (menuToggler.classList.length == 2) {
  //   menuToggler.innerHTML = `<ion-icon name="close-outline"></ion-icon>`
  // } else {
  //   menuToggler.innerHTML = `<ion-icon name="menu-outline"></ion-icon>`
  // }
})
