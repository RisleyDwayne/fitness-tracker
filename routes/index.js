const express = require("express");
const apiRoutes = require("./apiRoutes");

const router = express.Router();

router.use("/workouts", apiRoutes);

module.exports = router;