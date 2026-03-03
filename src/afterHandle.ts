import { Elysia, t } from "elysia";
import { openapi } from "@elysiajs/openapi";

const app = new Elysia()
    .use(openapi())
    .onAfterHandle(({ response }) => {
    return {
      success: true,
      Message: "data tersedia",
      data: response 
    };
  })

  .get("/product", () => {
    return { 
      id: 1, 
      name: "Laptop" 
    };
  })
    .listen(3000);

console.log(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);