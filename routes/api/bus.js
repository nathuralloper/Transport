const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

const Bus = require("../../models/Bus");

const auth = require("../../middleware/auth");

// @route   GET api/routes
// @desc    Get all routes
// @access  Public
router.get("/", async (req, res) => {
  try {
    const _result = await Bus.find().sort({ date: -1 });

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
    const _result = await Bus.findOne({ _id: req.params.id });
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
    check("name", "Nombre es requerido")
      .not()
      .isEmpty(),
    check("color", "Color es requerido")
      .not()
      .isEmpty(),
    check("brand", "Marca es requerida")
      .not()
      .isEmpty(),
    check("model", "Modelo es requerido")
      .not()
      .isEmpty(),
    check("serial", "Serial es requerido")
      .not()
      .isEmpty(),
    check("capacity", "Capacidad es requerido")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, color, brand, model, serial, capacity, active } = req.body;

    const routeFields = {
      name,
      color,
      brand,
      model,
      serial,
      capacity,
      active
    };

    try {
      let _result = new Bus(routeFields);
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
      check("name", "Nombre es requerido")
        .not()
        .isEmpty(),
      check("color", "Color es requerido")
        .not()
        .isEmpty(),
      check("brand", "Marca es requerida")
        .not()
        .isEmpty(),
      check("model", "Modelo es requerido")
        .not()
        .isEmpty(),
      check("serial", "Serial es requerido")
        .not()
        .isEmpty(),
      check("capacity", "Capacidad es requerido")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const { name, color, brand, model, serial, capacity, active } = req.body;

    try {
      let _result = await Bus.findOne({ _id: req.params.id });
      if (_result) {
        _result.name = name;
        _result.color = color;
        _result.brand = brand;
        _result.model = model;
        _result.serial = serial;
        _result.capacity = capacity;
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
    const _result = await Bus.findById(req.params.id);

    if (!_result) {
      return res.status(404).json({ msg: "El autobus no existe" });
    }

    await _result.remove();

    res.json({ msg: "Autobus eliminado" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "El autobus no existe" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
