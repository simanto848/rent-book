const router = require("express").Router()
const admins = require("./admins/admins")
const users = require("./users")
const home = require("./home")

router.use("/admin", admins)
router.use("/user", users)
router.use("/", home)

module.exports = router