const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator/check");
const auth = require("../../middleware/auth");

const User = require("../../models/User");

// @route   GET api/users
// @desc
// @access  Public
router.get("/", auth, async (req, res) => {
  try {
    const result = await User.find();
    res.json(result);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   POST api/users
// @desc
// @access  Public
router.post(
  "/",
  [
    auth,
    [
      check("name", "Nombre es requerido")
        .not()
        .isEmpty(),
      check("email", "El correo es invalido").isEmail(),
      check(
        "password",
        "Por favor introduzca una contraseña con 6 caracteres por lo menos"
      ).isLength({ min: 6 })
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;
    try {
      let user = await User.findOne({ email });

      //See if user exists
      if (user) {
        return res.status(400).json({
          errors: [{ msg: "El correo del usuario ya esta registrado" }]
        });
      }

      user = new User({
        name,
        email,
        password
      });

      //Encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();
      return res.json(user);
    } catch (err) {
      res.status(500).send("Server error");
    }
  }
);

// @route   PUT api/users/:Id
// @desc
// @access  Public
router.put(
  "/:Id",
  [
    auth,
    [
      check("name", "Nombre es requerido")
        .not()
        .isEmpty(),
      check("email", "El correo es invalido").isEmail(),
      check(
        "password",
        "Por favor introduzca una contraseña con 6 caracteres por lo menos"
      ).isLength({ min: 6 })
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { _id, name, email } = req.body;

    try {
      const user = await User.findOneAndUpdate(
        req.params.Id,
        {
          name,
          email
        },
        { new: true }
      ).then(_user => {
        if (!_user) {
          return res.status(400).json({ msg: "El usuario no se pugo guardar" });
        } else {
          return res.json(_user);
        }
      });
    } catch (err) {
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
