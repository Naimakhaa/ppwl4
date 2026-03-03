import { Elysia, t } from "elysia";
import { openapi } from "@elysiajs/openapi";

const app = new Elysia()
.use(openapi())

  .onError(({ code, error, set }) => {
    
    if (code === "VALIDATION") {
      set.status = 400;

      return {
        success: false,
        error: "Validation Error"
      };
    }

  })

  .post(
    "/login",
    ({ body }) => {
      return {
        success: true,
        message: "Login berhasil"
      };
    },
    {
      body: t.Object({
        email: t.String({
          format: "email"
        }),
        password: t.String({
          minLength: 8
        })
      })
    }
  )
  .listen(3000);
console.log(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);