import AbstractProducer from './AbstractProducer'

export default class Producer extends AbstractProducer {
  readonly isNull = (): boolean => false
}
