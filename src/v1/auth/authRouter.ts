import { Hono } from 'hono';
import { authController } from './authController';


export const authRouter = new Hono();
// Call router within auth
authRouter.post('/auth', authController.postAuth);

export default authRouter;