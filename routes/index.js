const router = require("express").Router()
const admins = require("./admins/admins")
const users = require("./users")

router.use("/admin", admins)
router.use("/user", users)

module.exports = router