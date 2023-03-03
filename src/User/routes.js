const router = require("express").Router();
const { signUp } = require("./controllers");

router.post("/", signUp);

module.exports = router;
