import { Elysia } from "elysia";
import { openapi } from "@elysiajs/openapi";
import { productPlugin } from "./Plugins/productPlugin";

const app = new Elysia()
  .use(openapi())
  .use(productPlugin)
  .listen(3000);

console.log(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);