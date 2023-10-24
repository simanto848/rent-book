const Sequelize = require("sequelize")
const db = require("../../config/dbConfig")

class SuperAdmin extends Sequelize.Model {}

SuperAdmin.init({
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
}, {
    sequelize: db,
    modelName: "SuperAdmin",
    tableName: "superadmins",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
})

module.exports = SuperAdmin