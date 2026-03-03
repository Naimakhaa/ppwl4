import { Elysia, t } from "elysia";
import { openapi } from "@elysiajs/openapi";

const app = new Elysia()

.get(
  "/stats",

  () => {
    return {
      total: 150,
      active: 120
    };
  },

  {
    response: t.Object({
      total: t.Number(),
      active: t.Number()
    })
  }

)
.use(openapi())
.listen(3000);

console.log(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);