import express, { Application } from "express";

export default class PapersExpress {
  private app: Application

  constructor() {
    this.app = express()
  }

  start = () => {
    this.app.listen(1802, () => {
      console.log("Server is running on port 1802")
    })
  }
}
