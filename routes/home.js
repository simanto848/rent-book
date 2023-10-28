const router = require("express").Router()
const HomeController = require("../app/controllers/HomeController")

router.get("/", HomeController.index)
router.get("/:id/view", HomeController.itemView)

module.exports = router