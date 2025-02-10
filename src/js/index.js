import '../scss/style.scss'

let boxBrands = document.querySelectorAll('.section__brand-service-box')
let brandsList = document.querySelector('.section__brand-service-list')
let showAllBtn = document.querySelectorAll('.showall-btn')
let readallBtn = document.querySelector('.infobox__button')
let infoboxText = document.querySelector('.infobox__text')
let phoneButton = document.querySelectorAll('.phone--button')
let massageButton = document.querySelectorAll('.massage--button')
let modalFeedback = document.querySelector('.modal--feedback')
let modalCall = document.querySelector('.modal--call')
let backButton = document.querySelectorAll('.back--button')
let modalBox = document.querySelectorAll('.modal__box')
let burgerButton = document.querySelector('.burger--button')
let sidebar = document.querySelector('.sidebar')
let sidebarBox = document.querySelector('.sidebar__box')

// Открываем и закрывам область текста
readallBtn.addEventListener('click', function () {
  if (readallBtn.textContent === 'Читать далее') {
    infoboxText.classList.add('infobox-text--all')
    readallBtn.textContent = 'Скрыть'
    readallBtn.classList.add('readall-btn--Up')
  } else if (readallBtn.textContent === 'Скрыть') {
    infoboxText.classList.remove('infobox-text--all')
    readallBtn.textContent = 'Читать далее'
    readallBtn.classList.remove('readall-btn--Up')
  }
})

//Закрываем и открываем область секций
function OpenAll(showAllBtn, boxBrands) {
  showAllBtn.addEventListener('click', function () {
    if (showAllBtn.textContent === 'Показать всё') {
      boxBrands.classList.add('brandsbox--height-auto')
      showAllBtn.textContent = 'Скрыть'
      showAllBtn.classList.add('showall-btn--Up')
    } else if (showAllBtn.textContent === 'Скрыть') {
      boxBrands.classList.remove('brandsbox--height-auto')
      showAllBtn.textContent = 'Показать всё'
      showAllBtn.classList.remove('showall-btn--Up')
    }
  })
}

for (let i = 0; i < showAllBtn.length; i++) {
  showAllBtn[i].addEventListener('click', OpenAll(showAllBtn[i], boxBrands[i]))
}

function openModalFeedback() {
  modalFeedback.classList.add('modal--open')
}
//открываем модальное окно с кнопки
phoneButton[0].addEventListener('click', openModalFeedback)
phoneButton[1].addEventListener('click', openModalFeedback)

function closeModalFeedback() {
  modalFeedback.classList.remove('modal--open')
}
//закрываем модальное окно с кнопки
backButton[1].addEventListener('click', closeModalFeedback)
//закрываем модальное окно нажатием на заблюренную область
modalBox[0].addEventListener('click', (event) => {
  event._isClickWithInModal = true
})
modalFeedback.addEventListener('click', (event) => {
  if (event._isClickWithInModal) return
  closeModalFeedback()
})

function openModalCall() {
  modalCall.classList.add('modal--open')
}
//открываем модальное окно с кнопки
massageButton[0].addEventListener('click', openModalCall)
massageButton[1].addEventListener('click', openModalCall)

function closeModalCall() {
  modalCall.classList.remove('modal--open')
}
//закрываем модальное окно с кнопки
backButton[2].addEventListener('click', closeModalCall)
//закрываем модальное окно нажатием на заблюренную област
modalBox[1].addEventListener('click', (event) => {
  event._isClickWithInModal = true
})
modalCall.addEventListener('click', (event) => {
  if (event._isClickWithInModal) return
  closeModalCall()
})

//открываем сайдбар с кнопки
function openSidebar() {
  sidebar.classList.add('sidebar--open')
}
burgerButton.addEventListener('click', openSidebar)

//закрываем сайтбар с кнопки
function closeSidebar() {
  sidebar.classList.remove('sidebar--open')
}
backButton[0].addEventListener('click', closeSidebar)
//закрываем сайтбар нажатием на заблюренную область
sidebarBox.addEventListener('click', (event) => {
  event._isClickWithInSidebar = true
})
sidebar.addEventListener('click', (event) => {
  if (event._isClickWithInSidebar) return
  closeSidebar()
})

import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
Swiper.use(Pagination)

if (window.innerWidth < 768) {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 18,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
}
