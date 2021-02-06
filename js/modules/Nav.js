class Nav {
  constructor() {
    this.burger = document.querySelector(".burger")
    this.mobileNav = document.querySelector(".header .nav")
    this.toggleNav()
  }

  toggleNav() {
    this.burger.addEventListener("click", e => {
      this.mobileNav.classList.toggle("is-visible")
      e.target.classList.toggle("open")
    })
  }
}

export default Nav
