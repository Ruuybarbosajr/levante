import { Router } from 'express';
import controllers from '../controllers';
import middlewares from '../middlewares';

const router = Router();

router.get('/all', middlewares.authToken, controllers.books.readAll);

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

router.delete(
  '/delete/:id',
  middlewares.authToken,
  middlewares.authUser,
  controllers.books.destroy
);

router.get('/:id', middlewares.authToken, controllers.books.readOne);
export default router;
