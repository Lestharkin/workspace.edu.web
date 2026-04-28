import jobs_json from '../../../db/jobs.json'
import { Jobs } from './types/Jobs'

export default class JobsModel {
  private readonly jobs: Jobs[]

  constructor() {
    this.jobs = jobs_json as Jobs[]
  }

  readonly getJobs = (): Jobs[] => this.jobs
}
