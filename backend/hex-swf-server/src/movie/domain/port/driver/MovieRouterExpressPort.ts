import RouterExpress from '../../../../express/domain/RouterExpress'

export default interface MovieRouterExpressPort extends RouterExpress {    
  getMovies(): void
}
