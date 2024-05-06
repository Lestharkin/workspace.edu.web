import Component from "../util/component/Component"
import MovieController from "./controller/MovieController"
import MovieView from "./view/MovieView"

export default class Movie implements Component {
  private readonly movieController: MovieController

  constructor(parent: HTMLElement) {
    this.movieController = new MovieController(new MovieView(parent))
  }

  public deploy = (): void => {
    this.movieController.init()
  }
}