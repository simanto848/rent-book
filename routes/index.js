const router = require("express").Router()
const admins = require("./admins/admins")
const users = require("./users")
const home = require("./home")
const profile = require("./profiles")

router.use("/", home)
router.use("/admin", admins)
router.use("/user", users)
router.use("/profile", profile)

module.exports = router