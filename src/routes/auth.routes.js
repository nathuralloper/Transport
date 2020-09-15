const { Router } = require("express");

module.exports = function ({ AuthController }) {
  const router = Router();

  router.post("/singin", AuthController.singIn);
  router.post("/singup", AuthController.singUp);

  return router;
};
