import { gsap, TimelineMax, Power1, Power4 } from "gsap"
gsap.registerPlugin()

class AppearElements {
  constructor() {
    this.body = document.querySelector("body")
    this.preloader = document.querySelector(".preloader")
    this.tlShowElements = new TimelineMax({})

    this.events()
  }

  events() {
    document.addEventListener("DOMContentLoaded", () => {
      window.onload = () => {
        window.requestAnimationFrame(() => {
          this.showElements()
        })
      }
    })
  }

  showElements() {
    this.tlShowElements.from(".preloader__cover", { duration: 1.5, x: "200%", ease: Power1.easeOut })
    this.tlShowElements.to(".preloader__outer-circle", { duration: 0.5, opacity: 0, ease: Power4.easeOut }, "=-1.5")
    this.tlShowElements.to(".preloader", { duration: 1.5, x: "-100%", ease: Power4.easeOut }, "=-1")
    this.tlShowElements.from(".section--intro h2, .section--intro p", { duration: 1.5, y: "10px", opacity: 0, ease: Power4.easeOut }, "=-1")
    this.tlShowElements.from(".section--intro .btn, .section--intro .btn", { duration: 1.5, x: "-15px", opacity: 0, stagger: 0.15, ease: Power4.easeOut }, "=-1.4")
    this.tlShowElements.from(".illustration-hero__rect", { duration: 1.5, scaleX: 0, stagger: 0.1, ease: Power4.easeOut }, "=-1.5")
    this.tlShowElements.from(".illustration-hero__circle", { duration: 0.75, opacity: 0, stagger: 0.1, ease: Power1.easeOut }, "=-1.2")
    this.tlShowElements.from(".illustration-hero__circle-group", { duration: 0.75, scale: 0, opacity: 0, transformOrigin: "center", ease: Power1.easeOut }, "=-1")
    this.tlShowElements.from(".illustration-hero__inner", { duration: 0.75, scale: 1.1, opacity: 0, ease: Power1.easeOut }, "=-0.5")
    setTimeout(() => {
      this.body.classList.remove("scroll-disabled")
    }, 500)
    setTimeout(() => {
      this.preloader.remove()
    }, 2500)
  }
}

export default AppearElements
