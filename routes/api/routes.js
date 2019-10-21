const express = require("express");
const router = express.Router();

const Routes = require("../../models/Routes");

// @route   GET api/routes
// @desc    Get all routes
// @access  Public
router.get("/", async (req, res) => {
  try {
    const _result = await Routes.find().sort({ date: -1 });
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
    const _result = await Routes.findOne({ _id: req.params.id });
    res.json(_result);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

// @route   POST api/routes
// @desc    save the routes
// @access  Public
router.post("/", async (req, res) => {
  const {
    _id,
    name,
    origin_province,
    destination_province,
    active,
    stations
  } = req.body;

  const routeFields = {
    _id,
    name,
    origin_province,
    destination_province,
    active,
    stations
  };

  try {
    _route = new Routes(routeFields);
    await _route.save();
    return res.json(_route);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// @route   POST api/routes/:id
// @desc    update routes
// @access  Public
router.put("/:id", async (req, res) => {
  const {
    name,
    origin_province,
    destination_province,
    active,
    stations
  } = req.body;

  try {
    let _route = await Routes.findOne({ _id: req.params.id });
    if (_route) {
      _route.name = name;
      _route.origin_province = origin_province;
      _route.destination_province = destination_province;
      _route.active = active;
      _route.stations = stations;
      res.json(_route);
    } else {
      res.status(400).json({
        errors: [
          {
            msg:
              "Ups hubo un error al intentar actualizar la información de la ruta"
          }
        ]
      });
    }
  } catch (err) {
    console.log(err.message);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
