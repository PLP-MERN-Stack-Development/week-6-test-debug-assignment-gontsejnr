import { rest } from "msw";

export const handlers = [
  rest.get("/api/users", (req, res, ctx) => {
    return res(
      ctx.json([
        { id: "1", name: "John Doe", email: "john@example.com" },
        { id: "2", name: "Jane Smith", email: "jane@example.com" },
      ])
    );
  }),

  rest.post("/api/users", (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({ id: "3", name: "New User", email: "new@example.com" })
    );
  }),

  rest.put("/api/users/:id", (req, res, ctx) => {
    return res(
      ctx.json({
        id: req.params.id,
        name: "Updated User",
        email: "updated@example.com",
      })
    );
  }),

  rest.delete("/api/users/:id", (req, res, ctx) => {
    return res(ctx.status(204));
  }),
];
