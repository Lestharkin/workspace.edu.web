export default class IndexView {
  private elements: { [name: string]: HTMLElement }

  constructor() {
    this.elements = {
      searchForm:
        (document.querySelector('#search') as unknown as HTMLInputElement) ??
        document.createElement('form'),
    }
  }

  public init = (
    searchMovies: (search: string) => void
  ): void => {
    this.searchMoviesForm(searchMovies)
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
