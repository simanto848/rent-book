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
        validate: {
            // Validating Picture URL
            isUrl: true
        }
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
        allowNull: false,
        validate: {
            validConditions(value) {
                const validConditions = ["new", "used", "like new"]
                if (!validConditions.includes(value)) {
                    throw new Error("Condition must be new, used, or like new")
                }
            }
        }
    },
    weight: {
        type: Sequelize.INTEGER,
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
    // sellerId(foreign key), keywordId(foreign key)
},
{
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    defaultScope: {
        where: {
            status: true
        }
    }
})

module.exports = Book