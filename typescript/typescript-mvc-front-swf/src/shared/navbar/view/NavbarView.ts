import View from '../../../util/view/View.js'

export default class NavbarView extends View {
  constructor(parent: HTMLElement) {
    super(parent, './partials/shared/navbar/navbar.html')
  }

  public render = async (): Promise<void> => {
    await this.load()    
  }

  public addEventListenerToHome = (fn: EventListenerOrEventListenerObject): void => {
    const home = document.querySelector('#homeLink') ?? document.createElement('a')
    home.addEventListener('click', fn)
  }

  public addEventListenerToMovies = (fn: EventListenerOrEventListenerObject): void => {
    const movies = document.querySelector('#moviesLink') ?? document.createElement('a')
    movies.addEventListener('click', fn)
  }

  public addEventListenerToCharacters = (fn: EventListenerOrEventListenerObject): void => {
    const characters = document.querySelector('#charactersLink') ?? document.createElement('a')
    characters.addEventListener('click', fn)
  }  
}
