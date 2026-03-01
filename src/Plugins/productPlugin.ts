import { Elysia, t } from "elysia";

export const productPlugin = new Elysia({
  prefix: "/products"
})
.get(
  "/:id",
  ({ params }) => {
    return {
      success: true,
      message: "data tersedia",
      data: {
        id: params.id,
        name: "Laptop"
      }
    };
  },
  {
    params: t.Object({
      id: t.Number()
    }),
    response: t.Object({
      success: t.Boolean(),
      message: t.String(),
      data: t.Object({
        id: t.Number(),
        name: t.String()
      })
    })
  }
);