const Sequelize = require("sequelize")
const db = require("../../config/dbConfig")

const Category = db.define("categories", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
},
{
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
})

module.exports = Category