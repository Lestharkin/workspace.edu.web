import AbstractProducer, { ProducerInterface } from './AbstractProducer'

export default class Producer extends AbstractProducer {
  constructor(producerInterface: ProducerInterface) {
    super(producerInterface)
  }

  public override isNull = (): boolean => false

  public override toString = (): string => `${this.names} ${this.surnames}`
}
