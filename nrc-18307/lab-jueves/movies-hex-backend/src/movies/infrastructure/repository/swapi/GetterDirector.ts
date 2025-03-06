import Director from '../../../domain/director/Director'
import NullDirector from '../../../domain/director/NullDirector'

export default class GetterDirector {
  public readonly get = (director: string): Director => {
    const directorNames = director.split(' ')

    if (
      directorNames[0] === undefined ||
      directorNames[0] === null ||
      directorNames[0] === ''
    ) {
      return new NullDirector()
    }

    return new Director({
      names: directorNames[0] ?? '',
      surnames: directorNames[1] ?? '',
      yearsOfExperience: 0,
    })
  }
}
