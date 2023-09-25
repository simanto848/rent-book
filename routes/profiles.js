const router = require("express").Router()
const ProfileController = require("../app/controllers/ProfileController")
const isLogin = require("../app/middleware/isLogin")

router.get("/", isLogin, ProfileController.profileIndex)
router.post("/", isLogin, ProfileController.profileName)
router.post("/address", isLogin, ProfileController.addressIndex)

module.exports = router