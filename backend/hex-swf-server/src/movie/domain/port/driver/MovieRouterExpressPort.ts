import RouterExpress from '../express/RouterExpress'

export default interface MovieRouterExpressPort extends RouterExpress {    
  getMovies(): void
}
