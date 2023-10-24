const Sequelize = require("sequelize")
const db = require("../../config/dbConfig")
const User = require("./users")
const Category = require("./categories")

class Book extends Sequelize.Model {}
Book.init({
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
    keyword: {
        type: Sequelize.STRING,
        allowNull: false
    },
    trending: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
},{
    sequelize: db,
    modelName: "Book",
    tableName: "books",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
})

Book.belongsTo(User, {
    foreignKey: "user_id",
    as: "user",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

User.hasMany(Book, {
    foreignKey: "user_id",
    as: "books",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

Book.belongsTo(Category, {
    foreignKey: "category_id",
    as: "category",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

Category.hasMany(Book, {
    foreignKey: "category_id",
    as: "books",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

module.exports = Book