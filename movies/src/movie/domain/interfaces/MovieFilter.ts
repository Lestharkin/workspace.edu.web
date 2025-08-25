import Classification from '../model/Movie/Classification'
import Genre from '../model/Movie/Genre'

export default interface MovieFilter {
  title?: string | undefined
  synopsis?: string | undefined
  release?: Date | undefined
  classification?: Classification | undefined
  genre?: Genre | undefined
  characters?: string[] | undefined
  director?: string | undefined
  producers?: string[] | undefined
  studio?: string | undefined
}
