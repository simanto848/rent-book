const router = require("express").Router()
const BookController = require("../app/controllers/BookController")

router.get("/", BookController.index)

module.exports = router