import sal from "sal.js"
// @import "./node_modules/sal.js/dist/sal.css"

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
