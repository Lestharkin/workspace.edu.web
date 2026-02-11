export default interface Movie {
  price: number
  title: string
  year: number
  score: number
  cast: string[]
  genres: string[]
  extract: string
  thumbnail: string
}

interface NullObject {
  isNull: boolean
}

interface NullObject extends Movie {}

export const NullMovie: NullObject = {
  price: -1,
  title: 'Not Found',
  year: -1,
  score: -1,
  cast: [],
  genres: [],
  extract: '',
  thumbnail: 'Not Found',
  isNull: true,
}
