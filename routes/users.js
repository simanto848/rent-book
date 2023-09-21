const router = require("express").Router()
const UserController = require("../app/controllers/UserController")

router.get("/", UserController.index)
router.get("/register", UserController.register)

module.exports = router