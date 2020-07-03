var express = require("express");
var ExerciseService = require("../services/exerciseService.js");
var router = express.Router();
var exerciseService = new ExerciseService();

router.get("/", function (req, res, next) {
  let blue = exerciseService.showMessage();
  res.send(blue);
});

module.exports = router;
