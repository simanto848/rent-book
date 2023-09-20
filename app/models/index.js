const db = require("../../config/dbConfig")
const SuperAdmin = require("./SuperAdmin")
const User = require("./users")
const Book = require("./books")
const Profile = require("./profiles")
const ProfilePhoto = require("./profilePhotos")
const Address = require("./addresses")
const Cart = require("./carts")
const Order = require("./orders")
const Category = require("./categories")
const Keyword = require("./keywords")
const Wishlist = require("./wishlists")
const Review = require("./reviews")
const Comment = require("./comments")

// ------ Associations ------ //
User.hasOne(Profile, {
    foreignKey: "userId",
    as: "profile",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

Profile.belongsTo(User, {
    foreignKey: "userId",
    as: "user"
})

User.hasOne(ProfilePhoto, {
    foreignKey: "userId",
    as: "profilePhoto",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

ProfilePhoto.belongsTo(User, {
    foreignKey: "userId",
    as: "user"
})

User.hasMany(Address, {
    foreignKey: "userId",
    as: "addresses",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

Address.belongsTo(User, {
    foreignKey: "userId",
    as: "user"
})

User.hasMany(Keyword, {
    foreignKey: "userId",
    as: "keywords",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

Keyword.belongsTo(User, {
    foreignKey: "userId",
    as: "user"
})

User.hasMany(Category, {
    foreignKey: "userId",
    as: "categories",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

Category.belongsTo(User, {
    foreignKey: "userId",
    as: "user"
})

User.hasMany(Book, {
    foreignKey: "userId",
    as: "books",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

Book.belongsTo(User, {
    foreignKey: "userId",
    as: "user"
})

User.hasMany(Cart, {
    foreignKey: "userId",
    as: "carts",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

Cart.belongsTo(User, {
    foreignKey: "userId",
    as: "user"
})

User.hasMany(Wishlist, {
    foreignKey: "userId",
    as: "wishlists",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

Wishlist.belongsTo(User, {
    foreignKey: "userId",
    as: "user"
})

Book.hasMany(Wishlist, {
    foreignKey: "bookId",
    as: "wishlists",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

Wishlist.belongsTo(Book, {
    foreignKey: "bookId",
    as: "book"
})

const dbConnection = db.sync({ alter: true })
    .then((result) => {
        console.log("Database connected")
    })
    .catch((err) => {
        console.log(err)
    })

module.exports = dbConnection