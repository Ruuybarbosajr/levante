import { Router } from 'express';
import controllers from '../controllers';
import middlewares from '../middlewares';

const router = Router();

router.patch(
  '/update/:id',
  middlewares.authToken,
  middlewares.authUser,
  controllers.bookings.update
);

router.post(
  '/create',
  middlewares.authToken,
  middlewares.authBodyBooking,
  controllers.bookings.create
);

router.get('/all', middlewares.authToken, controllers.bookings.readAll);

router.get('/:id', middlewares.authToken, controllers.bookings.readOne);

export default router;
