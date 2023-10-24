const Sequelize = require("sequelize")
const db = require("../../config/dbConfig")
const User = require("./users")

class Address extends Sequelize.Model {}

Address.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false
    },
    postalCode: {
        type: Sequelize.STRING,
        allowNull: false
    },
    country: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // userId (foreign key) is added to the table.
}, {
    sequelize: db,
    modelName: "Addresses",
    tableName: "addresses",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
})

Address.belongsTo(User, {
    foreignKey: "user_id",
    as: "user",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

User.hasMany(Address, {
    foreignKey: "user_id",
    as: "addresses",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

module.exports = Address;