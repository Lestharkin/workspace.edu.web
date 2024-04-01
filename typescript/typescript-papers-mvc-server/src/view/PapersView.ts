import { Router } from 'express'
import PapersController from '../controller/PapersController'

export default class PapersView {
  router: Router

  constructor (private readonly papersController: PapersController) {
    this.router = Router()
    this.routes()
  }

  routes = (): void => {
    this.router.get('/ref/references', this.papersController.getReferences.bind(this.papersController.getReferences))
    this.router.get('/ref/reference/:id', this.papersController.getReferenceById.bind(this.papersController.getReferenceById))
  }
}
