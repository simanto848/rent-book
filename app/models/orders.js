const Sequelize = require("sequelize")
const db = require("../../config/dbConfig")

class Order extends Sequelize.Model {}

Order.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    orderNumber: {
        type: Sequelize.INTEGER,
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
        allowNull: false,
        validate: {
            validStatus(value) {
                const validStatus = ["pending", "delivered", "cancelled"]
                if (!validStatus.includes(value)) {
                    throw new Error("Status must be pending, delivered, or cancelled")
                }
            }
        }
    }
    // userId(foreign key), productId(foreign key)
}, {
    sequelize: db,
    modelName: "Order",
    tableName: "orders",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
})

module.exports = Order