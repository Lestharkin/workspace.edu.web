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

export const NullMovie: Movie = {
  price: 0,
  title: 'Not found',
  year: 0,
  score: 0,
  cast: [],
  genres: [],
  extract: 'Not found',
  thumbnail: 'Not found',
}
