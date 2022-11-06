import express from 'express';
import middlewares from './middlewares';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/login', routes.login);
app.use('/books', routes.books);
app.use('/users', routes.users);
app.use('/bookings', routes.bookings);
app.use('/categories', routes.categories);

app.use(middlewares.handleError);

export { app };
