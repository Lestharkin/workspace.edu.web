import { Router } from "express"

export default  interface ExpressRouter {
  router: Router
  root: string
  routes: () => void
}