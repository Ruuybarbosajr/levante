import express from 'express';
import middlewares from './middlewares';
import routes from './routes';

const app = express();

app.use(express.json());

app.use('/login', routes.login);
app.use('/books', routes.books);
app.use('/users', routes.users);
app.use('/bookings', routes.bookings);
app.use('/categories', routes.categories);

app.use(middlewares.handleError);

export { app };
