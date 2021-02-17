import { Request, Response } from 'express'
import logger from '../utils/logger.util';

const getHome = (request: Request, response: Response) => {
  response.status(200).json({ status: 200 })
}

const getHome1 = (request: Request, response: Response) => {
  response.status(200).json({ status: 200 })
}

export default {
  getHome, getHome1
}