import AbstractImage from './AbstractImage'

export default class Image extends AbstractImage {
  readonly isNull = (): boolean => false
}
