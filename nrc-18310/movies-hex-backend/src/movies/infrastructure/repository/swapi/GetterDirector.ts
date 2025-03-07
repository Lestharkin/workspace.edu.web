import Director from '../../../domain/director/Director'
import NullDirector from '../../../domain/director/NullDirector'

export default class GetterDirector {
  public readonly get = (director: string): Director => {
    const directorName = director.split(' ')

    if (
      directorName[0] === undefined ||
      directorName[0] === null ||
      directorName[0] === ''
    ) {
      return new NullDirector()
    }

    return new Director({
      names: directorName[0] ?? '',
      surnames: directorName[1] ?? '',
      yearsOfExperience: 0,
    })
  }
}
