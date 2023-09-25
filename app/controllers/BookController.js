const User = require("../models/users")
const Category = require("../models/categories")
const Keyword = require("../models/keywords")
const Book = require("../models/books")

const index = (req, res) => {
    return res.render("bookIndex")
}

module.exports = {
    index
}