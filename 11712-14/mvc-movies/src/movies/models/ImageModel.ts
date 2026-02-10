import { promises as fs } from 'node:fs'
import path from 'node:path'

export default class ImageModel {
  readonly getPath = async (file: string): Promise<string> => {
    const imgPath = process.env['IMG_PATH'] ?? '../../../public/movies/'

    const absolutePath = path.join(__dirname, imgPath)
    const defaultImage = 'not-icon.png'
    try {
      await fs.access(absolutePath + file, fs.constants.F_OK)
      const stats = await fs.stat(absolutePath + file)
      if (stats.isFile()) {
        return absolutePath + file
      }
      return absolutePath + defaultImage
    } catch (err: unknown) {
      console.error(err instanceof Error ? err.message : String(err))
      return absolutePath + defaultImage
    }
  }
}
