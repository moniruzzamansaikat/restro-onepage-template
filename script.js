let menu = document.querySelector('#menu-bars')
let navbar = document.querySelector('.navbar')

menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times')
  navbar.classList.toggle('active')
})

window.addEventListener('scroll', () => {
  menu.classList.remove('fa-times')
  navbar.classList.remove('active')
})

document.querySelector('#search-icon').onclick = () => {
  document.querySelector('#search-form').classList.toggle('active')
}

document.querySelector('#close').onclick = () => {
  document.querySelector('#search-form').classList.remove('active')
}

let swiper = new Swiper('.home-slider', {
  spaceBetween: 135,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  loop: true
})


let reviewSwiper = new Swiper('.review-slider', {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
})
