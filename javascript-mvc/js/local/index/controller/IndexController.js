export default class IndexController {
  
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.display(this.getMovies());
  }

  getMovies = () => {
    // aquí pasan muchas cosas de control
    return this.model.getMovies();
  }
}