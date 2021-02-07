import sal from "sal.js"

class InView {
  constructor() {
    this.appear()
  }

  appear() {
    sal({
      once: false
    })
  }
}

export default InView
