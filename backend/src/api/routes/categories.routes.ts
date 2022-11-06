import { Router } from 'express';
import controllers from '../controllers';
import middlewares from '../middlewares';

const router = Router();

router.get('/all', middlewares.authToken, controllers.categories.readAll);

export default router;
