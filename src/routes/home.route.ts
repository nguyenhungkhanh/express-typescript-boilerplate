import { Router } from 'express';
import { HomeController } from '../controllers';

const router = Router();

router.get('/', HomeController.getHome)

router.get('/home/1', HomeController.getHome1)

export default router;

