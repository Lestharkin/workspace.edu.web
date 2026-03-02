import AbstractDirector from './AbstractDirector'

export default class NullDirector extends AbstractDirector {
  readonly isNull = (): boolean => true

  constructor() {
    super('not-found', 'Not found in database', 'Not found in database', 0)
  }

  override setNames = (_names: string): void => {
    throw new Error('Cannot set names on a NullDirector')
  }

  override setSurnames = (_surnames: string): void => {
    throw new Error('Cannot set surnames on a NullDirector')
  }

  override setReputation = (_reputation: number): void => {
    throw new Error('Cannot set reputation on a NullDirector')
  }
}
