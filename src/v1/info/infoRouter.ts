import { Hono } from 'hono';
import { infoController } from './infoController';


export const infoRouter = new Hono();

infoRouter.get('/info', infoController.getinfo)

export default infoRouter;