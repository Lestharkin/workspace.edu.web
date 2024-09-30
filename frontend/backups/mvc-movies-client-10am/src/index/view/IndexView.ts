export default class IndexView {
  private elements: { [name: string]: HTMLElement }

  constructor() {
    this.elements = {
      searchForm:
        (document.querySelector('#search') as unknown as HTMLInputElement) ??
        document.createElement('form'),
      main: document.querySelector('main') ?? document.createElement('main'),
    }
  }

  public init = (
    searchMovies: (search: string) => void
  ): void => {
    this.searchMoviesForm(searchMovies)
  }

  public renderMain = (componentName: string): void => {
    if (this.elements['main'] !== undefined){
      this.elements['main'].innerHTML = ''
      this.elements['main'].appendChild(document.createElement(componentName))
    }    
  }

  private searchMoviesForm = (searchMovies: (search: string) => void): void => {
    const searchForm = this.elements['searchForm']
    if (searchForm !== undefined) {
      const btn = searchForm.querySelector('button')
      if (btn !== null) {
        btn.addEventListener('click', (e) => {
          e.preventDefault()
          searchMovies(searchForm.querySelector('input')?.value ?? '')
        })
      }
    }
  }
}
