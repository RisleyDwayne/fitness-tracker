const express = require("express");
const router = express.Router();
const db = ("../models");

router.use("/workouts", apiRoutes);

module.exports = router;