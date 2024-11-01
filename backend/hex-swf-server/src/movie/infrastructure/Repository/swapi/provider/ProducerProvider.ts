import NullProducer from '../../../../domain/model/producer/NullProducer'
import Producer from '../../../../domain/model/producer/Producer'
import MovieDataInterface from '../../../../domain/types/MovieDataInterface'

export default class ProducerProvider {
  public static get = (movie: MovieDataInterface): Producer[] => {
    return movie.producers.map((producer) => {
      const producerNames = producer.split(' ')
      const name = producerNames[0] ?? ''
      const lastname = producerNames[1] ?? ''
      if (
        producerNames === undefined ||
        producerNames.length === 0 ||
        name === ''
      ) {
        return new NullProducer()
      }
      return new Producer({
        name: name,
        lastname: lastname,
      })
    })
  }
}
