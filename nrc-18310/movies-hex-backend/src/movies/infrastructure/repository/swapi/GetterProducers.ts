import NullProducer from '../../../domain/producer/NullProducer'
import Producer from '../../../domain/producer/Producer'

export default class GetterProducers {
  public readonly get = (producers: string): Producer[] => {
    const list = producers.split(',')
    return list.map((producer) => {
      const producerName = producer.split(' ')

      if (
        producerName[0] === undefined ||
        producerName[0] === null ||
        producerName[0] === ''
      ) {
        return new NullProducer()
      }

      return new Producer({
        names: producerName[0] ?? '',
        surnames: producerName[1] ?? '',
        budget: 0,
      })
    })
  }
}
