import { Elysia, t } from "elysia";

export const productPlugin = new Elysia({
  prefix: "/products",
})
  .onAfterHandle(({ response }) => {
    return {
      success: true,
      message: "data tersedia",
      data: response,
    };
  })

  .get(
    "/:id",
    ({ params }) => {
      return {
        id: params.id,
        name: "Laptop",
      };
    },
    {
      params: t.Object({
        id: t.Number(),
      }),

      response: {
        200: t.Object({
        success: t.Boolean(),
        message: t.String(),
        data: t.Object({
          id: t.Number(),
          name: t.String(),
        }),
      }),
    }
    }
  );