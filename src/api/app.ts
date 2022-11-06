import express from 'express';
import middlewares from './middlewares';
import routes from './routes';

const app = express();

app.use(express.json());

app.use('/login', routes.login);
app.use('/books', routes.books);

app.use(middlewares.handleError);

export { app };
