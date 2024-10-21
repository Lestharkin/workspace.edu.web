import { Router } from 'express'

export default interface MovieRouterExpress {
  router: Router

  routes: () => void
    
  getMovies(): void
}
