//Header
const header = document.querySelector('header')
header.className = 'header'

const header__container = document.querySelector('header>div')
header__container.className = 'container'

const header__content = document.querySelector('header>div>div')
header__content.className = 'header__content'

const logo = document.querySelector('header h1')
logo.className = 'logo'

const menu = document.querySelector('menu')
menu.className = 'header__menu'

const header__button = document.querySelector('header button')
header__button.className = 'header__menu-button'


//Main
const gallery = document.querySelector('section')
gallery.className = 'gallery'

const gallery__cards = gallery.children
const list__gallery__cards = Array.from(gallery__cards)
list__gallery__cards.forEach((div) => {
  div.className = 'gallery__item'
})

const gallery__item__image = document.querySelectorAll('img')
const imgList = Array.from(gallery__item__image)
imgList.forEach((img) => {
  img.className = 'gallery__item__image'
})

const gallery__item__theme = document.querySelectorAll('main h3')
const themeList = Array.from(gallery__item__theme)
themeList.forEach((h3) => {
  h3.className = 'gallery__item__text'
})

const gallery__item__paragraph = document.querySelectorAll('main p')
const paragraphList = Array.from(gallery__item__paragraph)
paragraphList.forEach((p) => {
  p.className = 'gallery__item__text'
})


const subscribe = document.querySelector('main>div>div')
subscribe.className = 'subscribe'

const subscribe__text = document.querySelectorAll('p')[6]
subscribe__text.className = 'subscribe__text'

const subscribe__input = document.querySelector('input')
subscribe__input.className = 'subscribe__input'

const subscribe__button = document.querySelector('main button')
subscribe__button.className = 'subscribe__button'