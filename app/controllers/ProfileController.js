const Profile = require('../models/profiles');
const User = require('../models/users');

const profileIndex = (req, res) =>{
    return res.render('profile');
}

const profileCreate = async (req, res) =>{

}

module.exports = {
    profileIndex,
    profileCreate
}