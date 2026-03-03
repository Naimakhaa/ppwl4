import { Elysia, t} from "elysia";
import { openapi } from "@elysiajs/openapi";

const app = new Elysia()
.use(openapi())
.get(
    "/products/:id",
    ({ params, query }) => {
        return {
            id: params.id,
            sort: query.sort,
            message: "Produk berhasil diambil"
    };
  },
  {
    params: t.Object({
      id: t.Number()
    }),
    query: t.Object({
      sort: t.Union([
        t.Literal("asc"),
        t.Literal("desc")
      ])
    })
  }
)
.listen(3000);
console.log(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);