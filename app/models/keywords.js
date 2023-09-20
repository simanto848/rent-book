const Sequelize = require("sequelize")
const db = require("../../config/dbConfig")

const Keyword = db.define("keywords", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    keyword: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},
{
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
})

module.exports = Keyword