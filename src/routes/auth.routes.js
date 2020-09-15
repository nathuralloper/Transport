const { Router } = require("express");

module.exports = function ({ AuthController }) {
  const router = Router();

  router.post("/signIn", AuthController.signIn);
  router.post("/signUp", AuthController.signUp);

  return router;
};
