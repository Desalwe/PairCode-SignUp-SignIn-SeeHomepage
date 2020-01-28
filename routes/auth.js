const express = require("express");
const { createUser, checkIfEmailExists } = require("../controllers/auth-controller");

const router = express.Router();

router.post("/signup", checkIfEmailExists, createUser);

module.exports = router;
