export default interface MovieImageServicePort {
  getImages: (ids: string[]) => Promise<string[]>
}