import { Request, Response } from 'express';
import logger from '../utils/logger.util';

import User from '../models/user.model';

const getUsers = (request: Request, response: Response) => {
  response.status(200).json({ status: 200 })
}

const createUser = (request: Request, response: Response) => {
  response.status(200).json({ status: 200 })
}

export default {
  getUsers, createUser
}