import { Context } from 'hono';

class AuthController
{
    // REST : POST 
    // URL  : https://{root}:3001/api/v1/auth 
    async postAuth(ctx: Context) {
        // Auth req body 
        // userid   : email
        // password : password
        const { userid , password} = await ctx.req.json();
        console.log("POST userid : " + userid);
        console.log("POST password :"+ password);
        // Task Auth
        // TODO : FireBase? Make Auth Server?

        // recv 200 and userdata
        return ctx.json({name :'hogehoge',  roll:'katze'},200);

    }

}

export const authController = new AuthController();