const { Router } = require("express");
const {
  AuthMiddleware,
  ParseIntMiddleware,
  CacheMiddleware,
} = require("../middlewares");
const { CACHE_TIME } = require("../helpers");

module.exports = function ({ BusController }) {
  const router = Router();

  router.get("/:busId", AuthMiddleware, BusController.get);
  router.get(
    "/",
    [AuthMiddleware, ParseIntMiddleware, CacheMiddleware(CACHE_TIME.ONE_HOUR)],
    BusController.getAll
  );
  router.post("/", BusController.create);
  router.patch("/:busId", AuthMiddleware, BusController.update);
  router.delete("/:busId", AuthMiddleware, BusController.delete);

  return router;
};
