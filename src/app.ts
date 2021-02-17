import express, { Application, Router } from 'express'
import mongoose from 'mongoose';
import logger from './utils/logger.util';

class App {
  public app: Application = express()

  constructor() {
    this.app.use(express.static('public'))
  }

  public setMiddlewares(middlewares: { forEach: (arg0: (middleware: any) => void) => void; }) {
    middlewares.forEach(middleware => {
      this.app.use(middleware)
    })
  }

  public setRoutes(routes: Array<Router>) {
    for (const route of routes) {
      this.app.use('/', route)
    }
  }

  public connectDB(dbURI: String) {
    mongoose
      .connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true })
      .catch(error => logger.log('error', error))
  }

  public listen(port: Number) {
    this.app.listen(port, () => {
      console.log(`App listening on the http://localhost:${port}`)
    })
  }
}

export default App