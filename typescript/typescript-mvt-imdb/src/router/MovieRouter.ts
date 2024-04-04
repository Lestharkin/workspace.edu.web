
import { Router } from 'express'
import MovieView from '../view/MovieView'

export default class MoviesRouter {
  router: Router

  constructor (private readonly movieView: MovieView) {
    this.router = Router()
    this.routes()
  }

  routes = (): void => {
    this.router.get('/', this.movieView.index.bind(this.movieView.index))
  }
}
