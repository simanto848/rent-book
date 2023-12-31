const router = require("express").Router()
const admins = require("./admins/admins")
const users = require("./users")
const home = require("./home")
const profiles = require("./profiles")
const books = require("./books")
const carts = require("./carts")


router.use("/", home)
router.use("/admin", admins)
router.use("/user", users)
router.use("/profile", profiles)
router.use("/book", books)
router.use("/cart", carts)

module.exports = router