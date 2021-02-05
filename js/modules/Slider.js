import Swiper from "swiper"
import "swiper/swiper-bundle.css"

class Slider {
  constructor() {
    console.log("elo constructor")
    this.initSlider()
  }

  initSlider() {
    console.log("elo")
    const swiper = new Swiper(".swiper-container", {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination"
      }
    })
  }
}

export default Slider
