import { Router } from 'express';
import userController from '../controllers/userController';
import loginMiddleware from '../middlewares/login.middleware';

const loginRouter = Router();

loginRouter.post('/', loginMiddleware, userController.toLogin);

export default loginRouter;