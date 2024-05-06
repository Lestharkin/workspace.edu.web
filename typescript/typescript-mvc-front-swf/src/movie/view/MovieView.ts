import View from '../../util/view/View'

export default class MovieView extends View {
  constructor(parent: HTMLElement) {
    super(parent, './partials/movie/movie.html')
  }

  public render = async (): Promise<void> => {
    await this.load()
  }
}
