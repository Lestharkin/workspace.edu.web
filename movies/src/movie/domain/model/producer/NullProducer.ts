import Producer from './Producer'
import Role from './Role'

export default class NullProducer extends Producer {
  constructor() {
    super({
      id: 'not-found',
      names: 'Not found in database',
      surnames: 'Not found in database',
      role: Role.UNKNOWN,
    })
    this.isNull = true
  }

  override setNames = (_names: string): void => {
    throw new Error('Cannot set names on a NullProducer')
  }

  override setSurnames = (_surnames: string): void => {
    throw new Error('Cannot set surnames on a NullProducer')
  }

  override setRole = (_role: Role): void => {
    throw new Error('Cannot set role on a NullProducer')
  }
}
