import Swiper from "swiper/bundle"
import "swiper/swiper-bundle.css"

class Slider {
  constructor() {
    this.initSlider()
  }

  initSlider() {
    const swiper = new Swiper(".swiper-container", {
      loop: true,
      autoplay: {
        delay: 2500
      },
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination"
      }
    })
  }
}

export default Slider
