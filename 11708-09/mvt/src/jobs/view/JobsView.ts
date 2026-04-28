import { Request, Response } from 'express'
import path from 'node:path'
import JobsModel from '../model/JobsModel'

export default class JobsView {
  constructor(private readonly jobsModel: JobsModel) {}

  readonly index = (_req: Request, res: Response): void => {
    res.render(path.join(__dirname, '../template/index'), {
      jobs: this.jobsModel.getJobs(),
    })
  }
}
