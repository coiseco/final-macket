import '../scss/style.scss'
import Swiper from 'swiper/swiper-bundle'
import 'swiper/swiper.scss'

let listSliderDeact = document.querySelector('.slider-main__list')
let buttonShow = document.querySelector('#showButtonWrapper')
let buttonArrow = buttonShow.querySelector('#arrow')
let element = buttonShow.querySelector('#showButton')
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

function showHideMask() {
  sidebarMask.addEventListener(
    'click',
    (event) => {
      event.preventDefault()
      console.log('ne')

      let isACtive = document.querySelector(
        '.aside-menu-list__link--mod--active'
      )
      if (!isACtive) {
        for (let i = 0; i < sidebarMask.length; i++) {
          sidebarMask[i].classList.add('aside-menu-list__link--mod--active')
          console.log('da')
        }
      }
    },
    false
  )
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

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 16,
  slidesPerView: 'auto',

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
})

function swiperOff(param) {
  listSliderDeact.classList.add('slider-main__list--slider-deactive')
  listSliderDeact.classList.remove('swiper-wrapper')
  pagginationOff.remove()
  if (pagginationOff) {
    console.log('hui')
  } else {
    console.log('click')
  }

  console.log(param)
}

if (document.documentElement.clientWidth <= 768) {
  buttonShow.remove()
} else {
  swiperOff('ya otdau')
  showContent()
}
console.log('Works!')
