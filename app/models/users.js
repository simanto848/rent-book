const Sequelize = require("sequelize");
const db = require("../../config/dbConfig");

const User = db.define('users', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
            // validate: {
            //     min: 6,
            //     is: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/
            // }
        },
        role: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        isActive: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        verifyToken: {
            type: Sequelize.STRING,
            allowNull: true
        }
    },
    {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    })

module.exports = User