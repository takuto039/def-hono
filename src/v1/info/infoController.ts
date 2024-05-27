import { Context } from 'hono';

class InfoController
{
    async getinfo(ctx: Context) {
        return ctx.json({messege :'v1'},200)
    }

}

export const infoController = new InfoController();