import { Router } from 'express';
import controllers from '../controllers';
import middlewares from '../middlewares';

const router = Router();

router.get('/all', middlewares.authToken, controllers.books.readAll);

router.get('/:id', middlewares.authToken, controllers.books.readOne);

router.post(
  '/create',
  middlewares.authToken,
  middlewares.authUser,
  middlewares.authBodyBook,
  controllers.books.create
);

router.put(
  '/update',
  middlewares.authToken,
  middlewares.authUser,
  middlewares.authBodyBook,
  controllers.books.update
);

export default router;
