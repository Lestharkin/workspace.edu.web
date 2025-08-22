export default interface ValueObject {
  isDefined: () => boolean
  isValid: () => boolean
  equals: (other: ValueObject) => boolean
  toString: () => string
}
