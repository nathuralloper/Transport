const express = require("express");
const router = express.Router();

const Routes = require('../../models/Routes');

// @route   GET api/posts
// @desc    Get all posts
// @access  Private
router.get("", (req, res) => {
  try {
      const _result = await Routes.find().sort({date: -1});
      res.json(_result);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
