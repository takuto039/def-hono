import { Hono } from 'hono';
import { infoController } from './infoController';


export const infoRouter = new Hono();
// Call router within info
infoRouter.get('/info', infoController.getinfo);

export default infoRouter;