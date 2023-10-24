const Sequelize = require("sequelize");
const db = require("../../config/dbConfig");
const User = require("./users");

class Profile extends Sequelize.Model{}

Profile.init({
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
        allowNull: true
    }
},{
    sequelize: db,
    modelName: "Profile",
    tableName: "profiles",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
})

Profile.belongsTo(User, {
    foreignKey: "user_id",
    as: "user",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

User.hasOne(Profile, {
    foreignKey: "user_id",
    as: "profile",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

module.exports = Profile