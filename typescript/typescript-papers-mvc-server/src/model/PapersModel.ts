import references from '../database/references.json'

import PaperInterface from '../types/PaperInterface'

export default class PapersModel {
  getReferences = async (): Promise<PaperInterface[]> => {
    return references
  }

  getReferenceById = async (id: string): Promise<PaperInterface | undefined> => {
    return references.find((reference) => reference._id === id)
  }
}
