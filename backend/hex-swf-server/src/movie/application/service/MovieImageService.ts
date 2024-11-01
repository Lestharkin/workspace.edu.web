import MovieImageServicePort from '../../domain/port/driver/MovieImageServicePort'

export default class MovieImageService implements MovieImageServicePort {
  public getImages = (ids: string[]): Promise<string[]> => {
    const endpoints: string[] = []
    ids.forEach((id) => {
      endpoints.push(`http://localhost/movie/image/${id}`)
    })
    return new Promise((resolve, reject) => {
      try {
        resolve(endpoints)
      } catch (error) {
        if (error instanceof Error) {
          reject(error)
        }
        reject(new Error('Error while fetching images'))
      }
    })
  }
}
