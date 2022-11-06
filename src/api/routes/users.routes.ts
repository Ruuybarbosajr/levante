import { Router } from 'express';
import controllers from '../controllers';
import middlewares from '../middlewares';
import 'express-async-errors';

const router = Router();

router.post(
  '/create',
  middlewares.authToken,
  middlewares.authUser,
  middlewares.authBodyUser,
  controllers.users.create
);

router.get(
  '/all',
  middlewares.authToken,
  middlewares.authUser,
  controllers.users.readAll
);

router.get('/:id', middlewares.authToken, controllers.users.readOne);

export default router;
