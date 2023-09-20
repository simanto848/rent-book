const Sequelize = require("sequelize")
const db = require("../../config/dbConfig")

const Cart = db.define("carts", {
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
    },
    // userId(foreign key), productId(foreign key)
},
{
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
})

module.exports = Cart