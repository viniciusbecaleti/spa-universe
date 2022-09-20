import { Router } from './modules/router.js'

const router = new Router()

router.addRoute('/', '../pages/home.html')
router.addRoute('/universe', '../pages/universe.html')
router.addRoute('/exploration', '../pages/exploration.html')
router.addRoute(404, '../pages/404.html')

router.handle()

window.route = () => router.route()
window.onpopstate = () => router.handle()