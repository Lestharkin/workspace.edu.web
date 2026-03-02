import AbstractDirector from './AbstractDirector'

export default class Director extends AbstractDirector {
  readonly isNull = (): boolean => false
}
