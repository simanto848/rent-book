const router = require("express").Router()
const ProfileController = require("../app/controllers/ProfileController")

router.get("/", ProfileController.profileIndex)
router.post("/", ProfileController.profileCreate)

module.exports = router