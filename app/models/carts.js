const Sequelize = require("sequelize")
const db = require("../../config/dbConfig")
const User = require("./users")
const Book = require("./books")

class Cart extends Sequelize.Model {}

Cart.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    rent_duration: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    delivery_charge: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    total_price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING(255),
        allowNull: false
    }
    // userId(foreign key), productId(foreign key)
},{
    sequelize: db,
    modelName: "Cart",
    tableName: "carts",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
})

Cart.belongsTo(User, {
    foreignKey: "user_id",
    as: "user",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

Cart.belongsTo(Book, {
    foreignKey: "book_id",
    as: "book",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

User.hasMany(Cart, {
    foreignKey: "book_id",
    as: "book",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

Book.hasMany(Cart, {
    foreignKey: "book_id",
    as: "book",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

module.exports = Cart