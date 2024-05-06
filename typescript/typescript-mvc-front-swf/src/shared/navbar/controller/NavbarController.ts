import NavbarView from '../view/NavbarView.js'

export default class NavbarController {
  constructor(private readonly navbarView: NavbarView) {}

  public init = async (): Promise<void> => {
    await this.navbarView.render()       
  }

  public addEventListeners = (fn: EventListenerOrEventListenerObject[]): void => {
    this.navbarView.addEventListenerToHome(fn[0] ?? (() => {}))
    this.navbarView.addEventListenerToMovies(fn[1] ?? (() => {}))
    this.navbarView.addEventListenerToCharacters(fn[2] ?? (() => {}))
  } 
}
