import { Router } from 'express';
import { BoThuController } from '../controllers';

const router = Router();

router.get('/bo-thu', BoThuController.getAll)
router.post('/bo-thu', BoThuController.create)
router.get('/bo-thu/:id', BoThuController.getById)
router.put('/bo-thu/:id', BoThuController.updateById)
router.delete('/bo-thu/:id', BoThuController.deleteById)

export default router;