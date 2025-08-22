import Studio from './Studio'

export default class NullStudio extends Studio {
  constructor() {
    super({
      id: 'not-found',
      name: 'Not found in database',
    })
    this.isNull = true
  }

  override setName = (_name: string): void => {
    throw new Error('Cannot set name on a NullStudio')
  }
}
