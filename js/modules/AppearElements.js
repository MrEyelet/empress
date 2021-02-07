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
    this.tlShowElements.from(".illustration-hero__rect", { duration: 1.5, scaleX: 0, stagger: 0.1, ease: Power4.easeOut }, "=-1.5")
    this.tlShowElements.from(".illustration-hero__circle", { duration: 1.5, opacity: 0, stagger: 0.1, ease: Power1.easeOut }, "=-1.2")
    this.tlShowElements.from(".illustration-hero__circle-group", { duration: 0.75, scale: 0, opacity: 0, transformOrigin: "center", ease: Power1.easeOut }, "=-1.7")
    this.tlShowElements.from(".illustration-hero__inner", { duration: 0.75, scale: 1.2, opacity: 0, ease: Power4.easeOut }, "=-1.5")
    setTimeout(() => {
      this.body.classList.remove("scroll-disabled")
    }, 750)
    setTimeout(() => {
      this.preloader.remove()
      this.body.classList.remove("scroll-disabled")
    }, 2500)
  }
}

export default AppearElements