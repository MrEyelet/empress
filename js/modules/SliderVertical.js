import Swiper from "swiper/bundle"
import "swiper/swiper-bundle.css"

class SliderVertical {
  constructor() {
    this.initSlider()
  }

  initSlider() {
    const swiper = new Swiper(".test", {
      loop: true,
      direction: "vertical",
      autoplay: {
        delay: 2500
      },
      slidesPerView: 7,
      spaceBetween: 30
    })
  }
}

export default SliderVertical
