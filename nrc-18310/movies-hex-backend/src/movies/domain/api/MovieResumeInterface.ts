import { CharacterInterface } from '../character/AbstractCharacter'
import { DirectorInterface } from '../director/AbstractDirector'

export default interface MovieResumeInterface {
  title: string
  genres: string
  director: DirectorInterface
  characters: CharacterInterface[]
}
