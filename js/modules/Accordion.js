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
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px"
        }
      })
    }
  }
}

export default Accordion
