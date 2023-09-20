const Sequelize = require("sequelize")
const db = require("../../config/dbConfig")

const Review = db.define("reviews", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    review: {
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

module.exports = Review;