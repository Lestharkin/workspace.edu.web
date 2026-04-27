import jobs_json from '../../../db/jobs.json'
import Subject from '../../shared/observer/Subject'
import { Jobs } from './types/Jobs'

export default class JobsModel extends Subject {
  private readonly jobs: Jobs[]

  constructor() {
    super()
    this.jobs = jobs_json as Jobs[]
  }

  readonly getJobs = (): Jobs[] => this.jobs
}
