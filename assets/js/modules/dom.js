export class Dom {
  constructor(element) {
    this.element = element
  }

  removeClass(className) {
    this.element.classList.remove(className)
  }

  removeAllClass() {
    this.element.classList.remove(...this.element.classList)
  }

  addClass(className) { 
    this.element.classList.add(className)
  }
}