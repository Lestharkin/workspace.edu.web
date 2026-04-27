export interface Jobs {
  id: number
  company: string
  company_description: string
  position: string
  job_description: string
  type: Type
  benefits: string[]
  location: string
  posted_ago: string
}

export enum Type {
  Byhours = 'byhours',
  Fulltime = 'fulltime',
  Halftime = 'halftime',
}
