import Producer from './AbstractProducer'
import Role from '../enum/Role'

export default class NullProducer extends Producer {
  readonly isNull = (): boolean => true

  constructor() {
    super(
      'not-found',
      'Not found in database',
      'Not found in database',
      Role.UNKNOWN,
    )
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
