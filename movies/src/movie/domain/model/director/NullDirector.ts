import Director from './Director'

export default class NullDirector extends Director {
  constructor() {
    super({
      id: 'not-found',
      names: 'Not found in database',
      surnames: 'Not found in database',
      reputation: 0,
    })
    this.isNull = true
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
