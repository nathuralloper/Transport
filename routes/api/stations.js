const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

const Stations = require("../../models/Stations");

const auth = require("../../middleware/auth");

// @route   GET api/routes
// @desc    Get all routes
// @access  Public
router.get("/", async (req, res) => {
  try {
    const _result = await Stations.find().sort({ date: -1 });

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
    const _result = await Stations.findOne({ _id: req.params.id });
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
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { _id, name, address, contact, active } = req.body;

    const routeFields = {
      _id,
      name,
      address,
      contact,
      active
    };

    try {
      let _result = new Stations(routeFields);
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
    auth,
    [
      check("name", "Nombre es requerido")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const { name, address, contact, active } = req.body;

    try {
      let _result = await Stations.findOne({ _id: req.params.id });
      if (_result) {
        _result.name = name;
        _result.address = address;
        _result.contact = contact;
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
    const _result = await Stations.findById(req.params.id);

    if (!_result) {
      return res.status(404).json({ msg: "La estación no existe" });
    }

    await _result.remove();

    res.json({ msg: "Estación eliminado" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "El estación no existe" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
