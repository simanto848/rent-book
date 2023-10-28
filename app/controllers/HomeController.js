const Book = require("../models/books")
const User = require("../models/users")
const Category = require("../models/categories")

const index = async (req, res) => {
    try {
        const books = await Book.findAll({
            include: [
                { model: User, as: 'user', attributes: ['username'] },
                { model: Category, as: 'category', attributes: ['name'] }
            ]
        })
        res.render("home", {books: books})
    } catch (error) {
        console.log("Error retrieving books: ", error)
        res.status(500).send("Error retrieving books")
    }
}

const itemView = async (req, res) => {
    try {
        const book = await Book.findOne({
            where: {
                id: req.params.id
            },
            include: [
                { model: User, as: 'user', attributes: ['username'] },
                { model: Category, as: 'category', attributes: ['name'] }
            ]
        })
        console.log("Book: ", book)
        res.render("item", {book: book})
    } catch (error) {
        console.log("Error retrieving books: ", error)
        res.status(500).send("Error retrieving books")
    }
}

module.exports = { index, itemView }