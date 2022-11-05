import { Router } from 'express';
import controller from '../controllers';
import middlewares from '../middlewares';
import 'express-async-errors';

const router = Router();

router.post('/', middlewares.authBodyLogin, controller.login.execute);

export default router;
