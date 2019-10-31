const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

const Driver = require("../../models/Drivers");

const auth = require("../../middleware/auth");

// @route   GET api/routes
// @desc    Get all routes
// @access  Public
router.get("/", async (req, res) => {
  try {
    const _result = await Driver.find().sort({ date: -1 });

    res.json(_result);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

// @route   GET api/routes/:id
// @desc    Get by id routes
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const _result = await Driver.findOne({ _id: req.params.id });
    res.json(_result);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

// @route   POST api/routes
// @desc    save the routes
// @access  Public
router.post(
  "/",
  [
    check("fistname", "Nombre es requerido")
      .not()
      .isEmpty(),
    check("lastname", "Apellido es requerido")
      .not()
      .isEmpty()
      .not(),
    check("address", "Dirección es requerida")
      .not()
      .isEmpty(),
    check("identification_number", "Número de identificación es requerido")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      _id,
      fistname,
      lastname,
      address,
      identification_number,
      active
    } = req.body;

    const routeFields = {
      _id,
      fistname,
      lastname,
      address,
      identification_number,
      active
    };

    try {
      let _result = new Driver(routeFields);
      await _result.save();
      return res.json(_result);
    } catch (err) {
      console.log(err);
      res.status(500).send("Server error");
    }
  }
);

// @route   POST api/routes/:id
// @desc    update routes
// @access  Public
router.put(
  "/:id",
  [
    [
      check("fistname", "Nombre es requerido")
        .not()
        .isEmpty(),
      check("lastname", "Apellido es requerido")
        .not()
        .isEmpty()
        .not(),
      check("address", "Dirección es requerida")
        .isEmpty()
        .not(),
      check(
        "identification_number",
        "Número de identificación es requerido"
      ).isEmpty()
    ]
  ],
  async (req, res) => {
    const {
      fistname,
      lastname,
      address,
      identification_number,
      active
    } = req.body;

    try {
      let _result = await Driver.findOne({ _id: req.params.id });
      if (_result) {
        _result.fistname = fistname;
        _result.lastname = lastname;
        _result.address = address;
        _result.identification_number = identification_number;
        _result.active = active;
        res.json(_route);
      } else {
        res.status(400).json({
          errors: [
            {
              msg:
                "Ups hubo un error al intentar actualizar la información de la estacion"
            }
          ]
        });
      }
    } catch (err) {
      console.log(err.message);
      return res.status(500).send("Server error");
    }
  }
);

router.delete("/:id", auth, async (req, res) => {
  try {
    const _result = await Driver.findById(req.params.id);

    if (!_result) {
      return res.status(404).json({ msg: "El chofer no existe" });
    }

    await _result.remove();

    res.json({ msg: "Chofer eliminado" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "El chofer no existe" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
