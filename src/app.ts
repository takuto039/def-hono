import { Hono } from "hono";
import infoRouter from "./v1/info/infoRouter";


import { cors } from "hono/cors";


const app = new Hono();

app.use(
    '*',
    cors({
      origin: ['*'],
      allowHeaders: ['X-Custom-Header', 'Upgrade-Insecure-Requests', 'Content-Type', 'Accept', 'Authorization'],
      allowMethods: ['POST', 'GET', 'PATCH', 'DELETE' , 'OPTIONS'],
      exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
      maxAge: 600,
      credentials: true,
    })
  )


app.route('/api/v1', infoRouter)

export default app;