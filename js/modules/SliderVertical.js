import Swiper from "swiper/bundle"
import "swiper/swiper-bundle.css"

class SliderVertical {
  constructor() {
    this.initSlider()
  }

  initSlider() {
    const swiper = new Swiper(".slider--vertical", {
      loop: true,
      direction: "vertical",
      autoplay: {
        delay: 2500
      },
      slidesPerView: 7
      // autoHeight: true
    })
  }
}

export default SliderVertical
