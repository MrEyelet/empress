class Nav {
  constructor() {
    this.burger = document.querySelector(".burger")
    this.mobileNav = document.querySelector(".header .nav")
    this.mobileNavEls = document.querySelectorAll(".nav__list-el")
    this.body = document.querySelector("body")
    this.toggleNav()
  }

  toggleNav() {
    this.burger.addEventListener("click", e => {
      this.mobileNav.classList.toggle("is-visible")
      this.body.classList.toggle("is-blocked")
      e.target.classList.toggle("is-open")
      this.mobileNavEls.forEach(el => {
        el.classList.toggle("fade-in")
      })
    })
  }
}

export default Nav
