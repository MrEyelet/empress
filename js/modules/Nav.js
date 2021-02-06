class Nav {
  constructor() {
    this.burger = document.querySelector(".burger")
    this.mobileNav = document.querySelector(".header .nav")
    this.toggleNav()
  }

  toggleNav() {
    this.burger.addEventListener("click", () => {
      this.mobileNav.classList.toggle("is-visible")
    })
  }
}

export default Nav
