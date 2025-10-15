import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static classes = ["toolbar"]

  toggleToolbar() {
    this.element.classList.toggle(this.toolbarClass)
    this.textTarget.focus()
  }
}