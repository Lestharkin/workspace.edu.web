import { CharacterInterface } from '../character/AbstractCharacter'
import { DirectorInterface } from '../director/AbstractDirector'
import { ImageInterface } from '../image/AbstractImage'
import { ProducerInterface } from '../producer/AbstractProducer'

export default interface FullMovieInterface {
  title: string
  price: number
  year: number
  genres: string
  extract: string
  director: DirectorInterface
  producer: ProducerInterface[]
  age: number
  image: ImageInterface[]
  characters: CharacterInterface[]
}
