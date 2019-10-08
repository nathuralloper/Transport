const express = require("express");
const router = express.Router();
const User = require("../../models/User");

const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator/check");
const auth = require("../../middleware/auth");

// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   POST api/auth
// @desc    Authenticate user & get token
// @access  Public
router.post(
  "/",
  [
    check("email", "Por favor introducir un correo valido").isEmail(),
    check("password", "Contraseña es requerida").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });

      // See if user exists
      if (!user) {
        res.status(400).json({ errors: [{ msg: "Credencial incorrecta" }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        res.status(400).json({ errors: [{ msg: "Credencial incorrecta" }] });
      }

      //return jsonwebtoken
      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 360000
        },
        (err, token) => {
          if (err) {
            throw err;
          }
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
