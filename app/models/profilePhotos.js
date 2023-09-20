const Sequelize = require('sequelize');
const db = require('../../config/dbConfig');

const ProfilePhoto = db.define('profilePhotos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    photo: {
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
})

module.exports = ProfilePhoto