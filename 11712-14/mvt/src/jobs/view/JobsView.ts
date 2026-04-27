import { Request, Response } from 'express'
import path from 'node:path'
import Observer from '../../shared/observer/Observer'
import Subject from '../../shared/observer/Subject'
import { Jobs } from '../model/types/Jobs'
import JobsModel from '../model/JobsModel'

export default class JobsView extends Observer {
  private jobs: Jobs[]

  constructor(subject: Subject) {
    super(subject)
    this.jobs = (this.subject as JobsModel).getJobs()
  }

  readonly index = (_req: Request, res: Response) => {
    res.render(path.join(__dirname, '../template/index'), { jobs: this.jobs })
  }

  override readonly update: () => void = () => {
    this.jobs = (this.subject as JobsModel).getJobs()
  }
}
