import { Elysia, t } from "elysia";
import { openapi } from "@elysiajs/openapi";

const app = new Elysia()
.use(openapi())
.get(
  "/stats",() => {
    return {
      total: 100,
      active: 50
    };
  },

  {
    response: t.Object({
      total: t.Number(),
      active: t.Number()
    })
  }

)
.listen(3000);
console.log(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);