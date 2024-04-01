import { Router } from 'express'
import PapersController from '../controller/PapersController'

export default class PaperView {
  router: Router

  constructor (private readonly papersController: PapersController) {
    this.router = Router()
    this.routes()
  }

  routes = (): void => {
    this.router.get('/ref/references', this.papersController.getReferences.bind(this.papersController))
  }
}
