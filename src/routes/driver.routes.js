const { Router } = require("express");
const {
  AuthMiddleware,
  ParseIntMiddleware,
  CacheMiddleware,
} = require("../middlewares");
const { CACHE_TIME } = require("../helpers");

module.exports = function ({ DriverController }) {
  const router = Router();

  router.get("/:busId", AuthMiddleware, DriverController.get);
  router.get(
    "/",
    [AuthMiddleware, ParseIntMiddleware, CacheMiddleware(CACHE_TIME.ONE_HOUR)],
    DriverController.getAll
  );
  router.post("/", DriverController.create);
  router.patch("/:busId", AuthMiddleware, DriverController.update);
  router.delete("/:busId", AuthMiddleware, DriverController.delete);

  return router;
};
