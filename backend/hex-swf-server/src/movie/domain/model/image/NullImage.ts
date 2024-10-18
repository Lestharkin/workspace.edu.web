import AbstractImage from './AbstractImage'

export default class NullImage extends AbstractImage {
  constructor() {
    super({
      name: 'not found name in database',
      source: 'not found source in database',
    })
  }

  public override isNull = (): boolean => {
    return true
  }

  public override setName = (_name: string): void => {
    return
  }

  public override setSource = (_source: string): void => {
    return
  }
}
