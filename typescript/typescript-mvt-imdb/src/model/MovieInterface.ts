export default interface MovieInterface {
  rank: number
  title: string
  thumbnail: string
  rating: string
  id: string
  year: number
  image: string
  description: string
  trailer: string
  genre?: (string)[] | null
  director?: (string)[] | null
  writers?: (string)[] | null
  imdbid: string
}
