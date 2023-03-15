import express from 'express';
import loginRouter from './routes/loginRouter';
import orderRouter from './routes/orderRouter';
import productsRouter from './routes/productsRouter';
import usersRouter from './routes/userRouter';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/orders', orderRouter);

export default app;
