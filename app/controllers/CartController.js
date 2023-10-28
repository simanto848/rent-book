const User = require("../models/users")
const Book = require("../models/books")
const Cart = require("../models/carts")

const cart_index = async(req, res) => {
    try{
        const user_id = req.session.profile.id
        const carts = await Cart.findAll({
            where: {
                user_id: user_id
            },
            include: [
                { model: Book, as: "book", attributes: ["title", "picture", "price"] },
                { model: User, as: "user" }
            ]
        })
        console.log("Carts Item: ", carts)
        return res.render("cart", {cart: carts})
    } catch (error){
        console.log(error)
        return res.status(500).redirect("/")
    }
}

const cart_add = async (req, res) => {
    const user_id = req.session.profile.id;
    const book_id = req.params.id;
    const book_details = req.body;

    // Check if the item is already in the cart
    let existingCartItem = await Cart.findOne({
        where: {
            user_id: user_id,
            book_id: book_id
        }
    });

    if (existingCartItem) {
        // If the item exists in the cart, update the quantity
        existingCartItem.quantity += 1;
        await existingCartItem.save();

        req.session.message = {
            type: "warning",
            message: "Quantity increased in the cart!"
        };
        return res.redirect("/cart");
    } else {
        // If the item is not in the cart, create a new cart entry
        const newCart = await Cart.create({
            user_id: user_id,
            book_id: book_id,
            quantity: 1  // Set the initial quantity to 1
        });

        if (newCart) {
            req.session.message = {
                type: "warning",
                message: "Book has been added to the cart!"
            };
            return res.redirect("/cart");
        } else {
            req.session.message = {
                type: "warning",
                message: "Failed to add book to the cart!"
            };
            return res.redirect("/home");
        }
    }
};

const cart_update = async (req, res) => {
    const cart_id = req.params.id;
    const { quantity } = req.body; // Assuming you pass the new quantity in the request body

    try {
        const updatedCart = await Cart.findByPk(cart_id);
        if (updatedCart) {
            updatedCart.quantity = quantity;
            await updatedCart.save();
            req.session.message = {
                type: "warning",
                message: "Cart item updated!"
            };
            return res.redirect("/cart");
        } else {
            req.session.message = {
                type: "warning",
                message: "Cart item not found!"
            };
            return res.redirect("/cart");
        }
    } catch (error) {
        console.log(error);
        req.session.message = {
            type: "warning",
            message: "Failed to update cart item!"
        };
        return res.redirect("/cart");
    }
};


const cart_delete = async(req, res) => {
    const cart_id = req.params.id
    const deleteCart = await cart.destroy({
        where: {
            id: cart_id
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
    cart_update,
    cart_delete
}