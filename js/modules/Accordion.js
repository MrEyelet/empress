class Accordion {
  constructor() {
    this.accBtn = document.querySelectorAll(".accordion__trigger")
    this.toggleAccordion()
  }

  toggleAccordion() {
    for (let i = 0; i < this.accBtn.length; i++) {
      this.accBtn[i].addEventListener("click", function () {
        this.classList.toggle("active")
        var panel = this.nextElementSibling
        if (panel.style.display === "block") {
          panel.style.display = "none"
        } else {
          panel.style.display = "block"
        }
      })
    }
  }
}

export default Accordion
