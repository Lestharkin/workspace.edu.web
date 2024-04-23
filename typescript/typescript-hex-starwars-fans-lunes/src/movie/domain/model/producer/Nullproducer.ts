import AbstractPerson from '../person/AbstractPerson'

export default class NullProducer extends AbstractPerson {
  constructor() {
    super(
      'not found name in database',
      'not found lastname in database',
    )
  }

  public isNull(): boolean {
    return false
  }

  public setName(): void {
    return
  }

  public setLastname(): void {
    return
  }
}