import AbstractProducer from './AbstractProducer'

export default class NullProducer extends AbstractProducer {
  constructor() {
    super({ names: 'Not found', surnames: 'Not found', budget: 0 })
  }

  public override isNull = (): boolean => true

  public override toString = (): string => 'NullProducer'

  public override setBudget = (_budget: number): void => {
    return
  }
}
