import Producer from './Producer'

export default class NullProducer extends Producer {
  constructor() {
    super({
      name: 'not found name in database',
      lastname: 'not found lastname in database',
    })
  }

  public override setName = (_name: string): void => {
    return
  }

  public override setLastname = (_lastname: string): void => {
    return
  }

  public override isNull = (): boolean => {
    return true
  }
}
