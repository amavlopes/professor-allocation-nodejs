import { Router } from "express";

const routes = new Router();

routes.get("/", (request, response, next) => {
  return response.json({
    ok: false,
  });
});

export default routes;
