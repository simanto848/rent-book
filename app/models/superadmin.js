const Sequelize = require("sequelize")
const db = require("../../config/dbConfig")

const SuperAdmin = db.define("superadmin", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    role: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    }
},
{
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
})

module.exports = SuperAdmin