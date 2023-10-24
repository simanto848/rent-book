const Sequelize = require('sequelize');
const db = require('../../config/dbConfig');
const User = require('./users');

class ProfilePhoto extends Sequelize.Model {}
ProfilePhoto.init({
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
}, {
    sequelize: db,
    modelName: "ProfilePhoto",
    tableName: "profile_photos",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
})

ProfilePhoto.belongsTo(User, {
    foreignKey: "user_id",
    as: "user",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

User.hasOne(ProfilePhoto, {
    foreignKey: "user_id",
    as: "profilePhoto",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

module.exports = ProfilePhoto