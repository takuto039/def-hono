import app from "./app";
import { serve } from "@hono/node-server";
import fs from "fs";
import { createServer } from "https";


// Enabling SSL for the server
var options = {
    key : fs.readFileSync(String(process.env.mykey)),
    cert: fs.readFileSync(String(process.env.mycert))
}

export const main =async() =>
{
    // Server settings
    serve({
        fetch: app.fetch,
        createServer: createServer,
        serverOptions : options,
        port : Number(process.env.restport) 
    });
    // Hono Server Start
    serve(app);
    console.log('Hono Server Start : PORT ='+ String(process.env.restport))

}

