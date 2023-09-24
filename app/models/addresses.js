const Sequelize = require("sequelize")
const db = require("../../config/dbConfig")

const Address = db.define("addresses", {
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
},
    {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    })

module.exports = Address;