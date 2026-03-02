import AbstractStudio from './AbstractStudio'

export default class NullStudio extends AbstractStudio {
  readonly isNull = (): boolean => true

  constructor() {
    super('not-found', 'Not found in database')
  }

  override setName = (_name: string): void => {
    throw new Error('Cannot set name on a NullStudio')
  }
}
