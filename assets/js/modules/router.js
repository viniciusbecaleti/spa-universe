import { Dom } from "./dom.js"

const body = new Dom(document.body)
const linkHome = new Dom(document.querySelector('nav a[href="/"]'))
const linkUniverse = new Dom(document.querySelector('nav a[href="/universe"]'))
const linkExploration = new Dom(document.querySelector('nav a[href="/exploration"]'))

export class Router {
  routes = {}

  addRoute(route, page) {
    this.routes[route] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()
    
    window.history.pushState({}, '', event.target.href)

    this.handle()
  }

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]
    
    fetch(route)
    .then(response => response.text())
    .then(html => document.querySelector('#root').innerHTML = html)

    body.removeAllClass()

    switch (pathname) {
      case '/':
        body.addClass('page-home')
        linkHome.addClass('active')
        linkUniverse.removeClass('active')
        linkExploration.removeClass('active')
        break
      case '/universe':
        body.addClass('page-universe')
        linkHome.removeClass('active')
        linkUniverse.addClass('active')
        linkExploration.removeClass('active')
        break
      case '/exploration':
        body.addClass('page-exploration')
        linkHome.removeClass('active')
        linkUniverse.removeClass('active')
        linkExploration.addClass('active')
        break
      default:
        body.addClass('page-not-found')
        linkHome.removeClass('active')
        linkUniverse.removeClass('active')
        linkExploration.removeClass('active')
        break
    }
  }
}