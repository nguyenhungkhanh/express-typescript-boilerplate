import express, { Application, Router } from 'express'
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import logger from './utils/logger.util';

class App {
  public app: Application = express()

  constructor() {
    this.app.use(express.static('public'))
    this.app.use(function(_, response, next) {
      response.header("Access-Control-Allow-Origin", "*");
      response.header('Access-Control-Allow-Methods', "GET, PUT, POST, DELETE, OPTIONS");
      response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

      next();
    });
    this.app.use(bodyParser.urlencoded({ extended: false }))
    this.app.use(bodyParser.json())
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

  public connectDB(dbURI: string) {
    mongoose
      .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
      .catch(error => {
        logger.log('error', error);
        console.error(error)
      })
  }

  public listen(port: Number) {
    this.app.listen(port, () => {
      console.log(`App listening on the http://localhost:${port}`)
    })
  }
}

export default App