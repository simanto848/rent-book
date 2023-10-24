const db = require("../../config/dbConfig");
const SuperAdmin = require("./SuperAdmin");
const User = require("./users");
const Book = require("./books");
const Profile = require("./profiles");
const ProfilePhoto = require("./profilePhotos");
const Address = require("./addresses");
const Cart = require("./carts");
const Order = require("./orders");
const Category = require("./categories");
const Wishlist = require("./wishlists");
const Review = require("./reviews");
const Comment = require("./comments");

const dbConnection = db.sync({ alter: true })
    .then((result) => {
        console.log("Database connected");
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = dbConnection;