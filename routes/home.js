const router = require("express").Router()
const HomeController = require("../app/controllers/HomeController")

router.get("/", HomeController.index)

module.exports = router