import AbstractImage from './AbstractImage'

export default class NullImage extends AbstractImage {
  constructor() {
    super({
      name: 'Not found',
      path: 'Not found',
    })
  }

  public isNull = (): boolean => true

  public override setName = (_name: string): void => {
    return
  }

  public override setPath = (_path: string): void => {
    return
  }
}
