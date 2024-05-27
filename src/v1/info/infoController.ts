import { Context } from 'hono';

class InfoController
{
    // REST : GET 
    // URL  : https://{root}:3001/api/v1/info 
    async getinfo(ctx: Context) {
        // recv        : JSON  {messege : v1}
        // status code : 200
        return ctx.json({messege :'v1'},200)
    }

}

export const infoController = new InfoController();