import NullProducer from '../../../../domain/model/producer/NullProducer'
import Producer from '../../../../domain/model/producer/Producer'
import Role from '../../../../domain/model/producer/Role'

export default class MakerProducers {
  readonly make = (producers: string) => {
    const producersList = producers.split(',').map((producer) => {
      try {
        const id = ''
        const data = producer.split(' ')
        const names = data[0] ?? ''
        const surnames = data[1] ?? ''
        const roleString = data[2]
        const role =
          roleString && Role[roleString as keyof typeof Role]
            ? Role[roleString as keyof typeof Role]
            : Role.UNKNOWN

        return new Producer({
          id,
          names,
          surnames,
          role,
        })
      } catch (error) {
        console.error('Error parsing producer:', error)
        return new NullProducer()
      }
    })

    return producersList
  }
}
