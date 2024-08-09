import '../scss/style.scss'
import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
// import Swiper and modules styles
import 'swiper/swiper.scss'
import 'swiper/modules/pagination.scss'

let listSliderDeact = document.querySelector('.slider-main__list')
let listSliderDeactTechniks = document.querySelector(
  '.slider-main__list-techniks'
)
let buttonShow = document.querySelector('#showButtonWrapper')
let buttonArrow = buttonShow.querySelector('#arrow')
let element = buttonShow.querySelector('#showButton')
let buttonShowTechniks = document.querySelector('#showButtonTechniksWrapper')
let buttonArrowTechniks = buttonShowTechniks.querySelector('#arrowTechniks')
let elementTechniks = buttonShowTechniks.querySelector('#showButtonTechniks')
let pagginationOff = document.querySelector('.swiper-pagination')
let headerMenuRemoveOrAdd = document.querySelectorAll(
  '.header-menu__medium-screen-link'
)
let mainHeaderRemoveOrAdd = document.querySelector('.main-header__header-list')
let textExpandShowHide = document.querySelector('.main-content__text')
let showBtn = document.querySelector('.main-content__text-expand-btn')
let changeText = document.querySelector('#readText')
let arrowRotate = showBtn.querySelector('#arrowRotate')
let sidebarMask = document.querySelectorAll('.aside-menu-list__link')
let listHeaderRemoveOrAdd = document.querySelectorAll(
  '.list-of-services__services-list-link'
)
let burgerButton = document.querySelector('.header-menu__burger-link')
let sidebarClassesRemoveOrAdd = document.querySelector('#sideBarSection')
let sidebarCloseButton = document.querySelector('#aside-menu-close')
let bodyBlur = document.querySelector('.wrapper-blur')
let windowClose = document.querySelector('.aside-wrapper')

burgerButton.addEventListener('click', (evt) => {
  evt.preventDefault()

  if (
    document.documentElement.clientWidth >= 768 &&
    document.documentElement.clientWidth <= 1366
  ) {
    sidebarClassesRemoveOrAdd.classList.remove(
      'aside-menu',
      'visible',
      'visible-phone'
    )
    bodyBlur.classList.add('wrapper-blur--active')
    sidebarClassesRemoveOrAdd.classList.add('visible-tablet')
    windowClose.classList.add('aside-wrapper-active')
  }

  if (document.documentElement.clientWidth <= 768) {
    sidebarClassesRemoveOrAdd.classList.remove(
      'aside-menu',
      'visible',
      'visible-tablet'
    )
    sidebarClassesRemoveOrAdd.classList.add('visible-phone')
  }
})

if (sidebarClassesRemoveOrAdd.getElementsByClassName('visible-tablet')) {
  console.log('da')
  windowClose.addEventListener('click', (evt) => {
    evt.preventDefault()
    console.log('click')
    sidebarClassesRemoveOrAdd.classList.remove(
      'visible-phone',
      'visible-tablet'
    )
    sidebarClassesRemoveOrAdd.classList.add('aside-menu', 'visible')
    bodyBlur.classList.remove('wrapper-blur--active')
    windowClose.classList.remove('aside-wrapper-active')
  })
}

sidebarCloseButton.addEventListener(
  'click',
  (evt) => {
    evt.preventDefault()
    sidebarClassesRemoveOrAdd.classList.remove(
      'visible-phone',
      'visible-tablet'
    )
    sidebarClassesRemoveOrAdd.classList.add('aside-menu', 'visible')
    bodyBlur.classList.remove('wrapper-blur--active')
    windowClose.classList.remove('aside-wrapper-active')
  },
  false
)

for (let itm of listHeaderRemoveOrAdd) {
  itm.addEventListener('click', function (evt) {
    evt.preventDefault()
    itm.classList.add('list-of-services__services-list-link--active')
    for (let i = 0; i < listHeaderRemoveOrAdd.length; i++) {
      if (listHeaderRemoveOrAdd[i] !== itm) {
        listHeaderRemoveOrAdd[i].classList.remove(
          'list-of-services__services-list-link--active'
        )
      }
    }
  })
}

for (let itm of sidebarMask) {
  itm.addEventListener('click', function (evt) {
    evt.preventDefault()
    itm.classList.add('aside-menu-list__link--mod--active')
    for (let i = 0; i < sidebarMask.length; i++) {
      if (sidebarMask[i] !== itm) {
        sidebarMask[i].classList.remove('aside-menu-list__link--mod--active')
      }
    }
  })
}

showBtn.addEventListener(
  'click',
  (event) => {
    event.preventDefault()

    let isShowing = document.querySelector('.content-show')

    if (!isShowing) {
      textExpandShowHide.classList.add('content-show')
      changeText.textContent = 'Скрыть'
      arrowRotate.style.transform = 'rotate(180deg)'
    } else {
      textExpandShowHide.classList.remove('content-show')
      changeText.textContent = 'Читать далее'
      arrowRotate.style.transform = 'rotate(0deg)'
    }
  },
  false
)

function removeAdd() {
  if (
    document.documentElement.clientWidth >= 768 &&
    document.documentElement.clientWidth <= 1366
  ) {
    for (let i = 0; i < headerMenuRemoveOrAdd.length; i++) {
      headerMenuRemoveOrAdd[i].classList.remove('visually-hidden')
    }
  } else {
    for (let i = 0; i < headerMenuRemoveOrAdd.length; i++) {
      headerMenuRemoveOrAdd[i].classList.add('visually-hidden')
    }
  }

  if (document.documentElement.clientWidth <= 1366) {
    mainHeaderRemoveOrAdd.classList.add('visually-hidden')
  } else {
    mainHeaderRemoveOrAdd.classList.remove('visually-hidden')
  }
}

removeAdd()

window.addEventListener(
  `resize`,
  (event) => {
    removeAdd()
  },
  false
)

function showContentTechniks() {
  buttonShowTechniks.addEventListener('click', function (evt) {
    evt.preventDefault()

    let contentShowing = document.querySelector(
      '.slider-main__list--show-content-techniks'
    )
    if (!contentShowing) {
      listSliderDeactTechniks.classList.add(
        'slider-main__list--show-content-techniks'
      )
      listSliderDeactTechniks.classList.remove(
        'slider-main__list--hide-content'
      )
      elementTechniks.textContent = 'Скрыть'
      buttonArrowTechniks.classList.add('slider-button__arrow--reverse')
      buttonArrowTechniks.classList.remove('slider-button__arrow--forward')
    } else {
      listSliderDeactTechniks.classList.remove(
        'slider-main__list--show-content-techniks'
      )
      listSliderDeactTechniks.classList.add('slider-main__list--hide-content')
      elementTechniks.textContent = 'Показать всё'
      buttonArrowTechniks.classList.remove('slider-button__arrow--reverse')
      buttonArrowTechniks.classList.add('slider-button__arrow--forward')
    }
  })
}

function showContent() {
  buttonShow.addEventListener('click', function (evt) {
    evt.preventDefault()

    let contentShowing = document.querySelector(
      '.slider-main__list--show-content'
    )
    if (!contentShowing) {
      listSliderDeact.classList.add('slider-main__list--show-content')
      listSliderDeact.classList.remove('slider-main__list--hide-content')
      element.textContent = 'Скрыть'
      buttonArrow.classList.add('slider-button__arrow--reverse')
      buttonArrow.classList.remove('slider-button__arrow--forward')
    } else {
      listSliderDeact.classList.remove('slider-main__list--show-content')
      listSliderDeact.classList.add('slider-main__list--hide-content')
      element.textContent = 'Показать всё'
      buttonArrow.classList.remove('slider-button__arrow--reverse')
      buttonArrow.classList.add('slider-button__arrow--forward')
    }
  })
}

function swiperInit() {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',

    modules: [Pagination],
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  })
}

function swiperOff(param) {
  listSliderDeact.classList.add('slider-main__list--slider-deactive')
  listSliderDeact.classList.remove('swiper-wrapper')
  listSliderDeactTechniks.classList.add('slider-main__list--slider-deactive')
  listSliderDeactTechniks.classList.remove('swiper-wrapper')
  pagginationOff.remove()
}

if (document.documentElement.clientWidth <= 768) {
  swiperInit()
  buttonShow.remove()
  buttonShowTechniks.remove()
} else {
  swiperOff('ya otdau')
  showContent()
  showContentTechniks()
}
console.log('Works!')
