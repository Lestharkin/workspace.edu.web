import { Router } from 'express'

export default interface RouterExpressInterface {
  router: Router
  path: string

  routes(): void
}
