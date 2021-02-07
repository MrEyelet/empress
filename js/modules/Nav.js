import { gsap, TimelineMax, Power1, Power4 } from "gsap"
gsap.registerPlugin()

class Nav {
  constructor() {
    this.burger = document.querySelector(".burger")
    this.mobileNav = document.querySelector(".header .nav")
    this.body = document.querySelector("body")
    this.tl = new TimelineMax({})
    this.toggleListEls()
    this.toggleNav()
  }

  toggleListEls() {
    this.tl.from(".nav__list-el", { duration: 1, opacity: 0, y: "25px", stagger: 0.15, ease: Power1.easeOut })
    this.tl.reverse(-1)
    this.tl.reversed(true)
  }

  toggleNav() {
    this.burger.addEventListener("click", e => {
      this.mobileNav.classList.toggle("is-visible")
      this.body.classList.toggle("is-blocked")
      e.target.classList.toggle("is-open")
      this.tl.reversed(!this.tl.reversed())
    })
  }
}

export default Nav
