import Director from "../../../../domain/model/director/Director"
import NullDirector from "../../../../domain/model/director/NullDirector"
import MovieDataInterface from "../../../../domain/types/MovieDataInterface"

export default class DirectorProvider {
  public static readonly get = (movie: MovieDataInterface): Director => {
    const directorNames = movie.director.split(' ')
    const name  = directorNames[0] ?? ''
    const lastname = directorNames[1] ?? ''
    if (directorNames === undefined || directorNames.length === 0 || name === '') {
      return new NullDirector()
    }
    return new Director({
      name: name,
      lastname: lastname,
      yearsOfExperience: 12,          
    }) 
  }
}