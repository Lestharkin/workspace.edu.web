import Director from '../../../../domain/model/director/Director'
import NullDirector from '../../../../domain/model/director/NullDirector'

export default class MakerDirector {
  readonly make = (director: string) => {
    try {
      const id = ''
      const data = director.split(' ')
      const names = data[0] ?? ''
      const surnames = data[1] ?? ''
      const reputation = Number(data[2] ?? 0)

      return new Director({
        id,
        names,
        surnames,
        reputation,
      })
    } catch (error) {
      console.error('Error parsing director:', error)
      return new NullDirector()
    }
  }
}
