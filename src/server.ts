import app from "./app";
import { serve } from "@hono/node-server";
import fs from "fs";
import { createServer } from "https";


// サーバのSSL化
var options = {
    key : fs.readFileSync(String(process.env.mykey)),
    cert: fs.readFileSync(String(process.env.mycert))
}

export const main =async() =>
{
    // サーバの詳細設定
    serve({
        fetch: app.fetch,
        createServer: createServer,
        serverOptions : options,
        port : Number(process.env.restport) 
    });

    serve(app);
    console.log('Hono Server Start : PORT ='+ String(process.env.restport))

}

