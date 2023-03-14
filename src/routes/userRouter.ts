import { Router } from 'express';
import userController from '../controllers/userController';
// import authMiddleware from '../middlewares/auth.middleware';

const usersRouter = Router();

usersRouter.post('/', userController.insertUser);

export default usersRouter;