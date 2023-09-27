const Sequelize = require("sequelize")
const db = require("../../config/dbConfig")

const Book = db.define("books", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    picture: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    author: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    language: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    pages: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    condition: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    weight: {
        type: Sequelize.STRING,
        allowNull: false
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    trending: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
},
{
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
})

module.exports = Book