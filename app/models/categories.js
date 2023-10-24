const Sequelize = require("sequelize")
const db = require("../../config/dbConfig")

class Category extends Sequelize.Model{}

Category.init({
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
},{
    sequelize: db,
    modelName: "Category",
    tableName: "categories",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
})

module.exports = Category