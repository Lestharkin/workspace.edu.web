import NullProducer from '../../../domain/producer/NullProducer'
import Producer from '../../../domain/producer/Producer'

export default class GetterProducers {
  public readonly get = (producerList: string): Producer[] => {
    const producers = producerList.split(',')

    if (producers[0] === undefined || producers[0] === null) {
      return []
    }

    const prods = producers.map((producer) => {
      const producerNames = producer.split(' ')

      if (
        producerNames[0] === undefined ||
        producerNames[0] === null ||
        producerNames[0] === ''
      ) {
        return new NullProducer()
      }

      return new Producer({
        names: producerNames[0] ?? '',
        surnames: producerNames[1] ?? '',
        budget: 0,
      })
    })

    return prods
  }
}
