const router = require("express").Router()
const UserController = require("../app/controllers/UserController")
const VerifyAccount = require("../app/helpers/verifyAccount")

router.get("/", UserController.index)
router.post("/", UserController.login)
router.get("/register", UserController.register)
router.post("/register", UserController.signup)
router.get("/verify-account", VerifyAccount)

module.exports = router