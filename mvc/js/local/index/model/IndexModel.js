export default class IndexModel {

  constructor() {
    this.name = 'IndexModel';
  }

  async getMovies() {
    const response = await fetch('https://swapi.dev/api/films');
    const movies = await response.json();
    return movies.results.map( movie => {
      return {
        title: movie.title,
        director: movie.director,
        producer: movie.producer,
        release_date: movie.release_date
      }
    });
  }
  
}