const router = require("express").Router()
const AdminController = require("../../app/controllers/AdminController")

router.get("/", AdminController.index)
router.post("/", AdminController.login)

module.exports = router