const Sequelize = require("sequelize");
const db = require("../../config/dbConfig");

const Profile = db.define('profiles', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING
        },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
})

module.exports = Profile