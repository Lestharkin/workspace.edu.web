import MoviesModel from '../model/MoviesModel.js'
import Movie from '../types/Movie.js'
import Observer from '../types/Observer.js'
import MovieTemplate from '../template/MovieTemplate.js'
import PaginationControlTemplate from '../template/PaginationControlTemplate.js'

export default class MoviesView extends Observer<MoviesModel> {
  private selector: HTMLDivElement
  private selectorName = 'movies'

  constructor(subject: MoviesModel) {
    super(subject)
    this.selector = document.createElement('div')
  }

  public init(): void {
    this.selector = document.querySelector(this.selectorName) as HTMLDivElement
  }

  public override update(): void {
    this.render()
  }

  public async render(): Promise<void> {
    this.selector.innerHTML = ''
    const div = document.createElement('div')
    div.className = 'movies'
    div.innerHTML = await MovieTemplate.render(this.movies())    
    this.selector.appendChild(div)
    this.selector.appendChild(      
      PaginationControlTemplate.render(
        this.moviesModel().previousPage,
        this.moviesModel().getPage(),
        this.moviesModel().getTotalPages(),
        this.moviesModel().nextPage
      )      
    )
  }

  private moviesModel(): MoviesModel {
    return this.subject as MoviesModel
  }

  private movies(): Movie[] {
    return this.moviesModel().getMovies()
  }
}
