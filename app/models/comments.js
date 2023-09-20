const Sequelize = require("sequelize")
const db = require("../../config/dbConfig")

const Comment = db.define("comments", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    comment: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // userId (foreign key) is added to the table.
    // bookId (foreign key) is added to the table.
},
    {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    })

module.exports = Comment;