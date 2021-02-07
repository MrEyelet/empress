import Swiper from "swiper/bundle"
import "swiper/swiper-bundle.css"

class Slider {
  constructor() {
    this.initSlider()
  }

  initSlider() {
    const swiper = new Swiper(".slider--horizontal", {
      loop: true,
      autoplay: {
        delay: 2500
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 25
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    })
  }
}

export default Slider
