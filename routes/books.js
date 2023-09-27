const router = require("express").Router()
const BookController = require("../app/controllers/BookController")
const isLogin = require("../app/middleware/isLogin")

router.get("/", isLogin, BookController.index)
router.post("/", isLogin, BookController.createPost)

module.exports = router