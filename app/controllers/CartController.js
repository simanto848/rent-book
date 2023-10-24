const user = require("../models/users")
const book = require("../models/books")
const cart = require("../models/carts")

const cart_index = async(req, res) => {
    const userId = req.session.profile.id
    const carts = await cart.findAll({
        where: {
            userId: userId
        },
        include: {
            model: book,
            as: "book"
        }
    })
    return res.render("cart", {carts: carts})
}

const cart_add = async(req, res) => {
    const userId = req.session.profile.id
    const bookId = req.params.id
    const book_details = req.body
    const newCart = await cart.create({
        userId: userId,
        bookId: bookId
    })
    if(newCart){
        req.session.message = {
            type: "warning",
            message: "Book has been added!!!"
        }
        return res.redirect("/book")
    }
    else {
        req.session.message = {
            type: "warning",
            message: "Failed to add book!!!"
        }
        return res.redirect("/book")
    }
}

const cart_delete = async(req, res) => {
    const cartId = req.params.id
    const deleteCart = await cart.destroy({
        where: {
            id: cartId
        }
    })
    if(deleteCart){
        req.session.message = {
            type: "warning",
            message: "Book has been deleted!!!"
        }
        return res.redirect("/cart")
    }
    else {
        req.session.message = {
            type: "warning",
            message: "Failed to delete book!!!"
        }
        return res.redirect("/cart")
    }
}

module.exports = {
    cart_index,
    cart_add,
    cart_delete
}