const express = require("express");
const { createUser, loginUser } = require("../controllers/auth-controller");
// const { authenticateWithJwt } = require("../services/jwt");
const { showHomepage, showProfile } = require("../controllers/pages-controller");

const router = express.Router();

router.post("/signup", createUser);

router.post("/login", loginUser, showProfile);

module.exports = router;
