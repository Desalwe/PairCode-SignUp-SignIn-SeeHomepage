const express = require("express");
const { seeIt, createUser } = require("../controllers/auth-controller");

const router = express.Router();

router.post("/signup", seeIt);

module.exports = router;
