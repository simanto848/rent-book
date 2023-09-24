const User = require('../models/users');
const Profile = require('../models/profiles');
const Address = require('../models/addresses');

const profileIndex = (req, res) =>{
    return res.render('profile');
}

const profileName = async (req, res) =>{
    const userId = req.session.profile.id
    console.log("User Id", userId)
    const {firstName, lastName} = req.body

    if(req.method === "POST"){
        if(!firstName || !lastName){
            return res.redirect('/profile')
        }
        else {
            const user = await User.findOne({
                where: {
                    id: userId
                }
            })
            const profile = await Profile.findOne({
                where: {
                    userId: userId
                }
            })
            const address = await Address.findOne({
                where: {
                    profileId: profile.id
                }
            })
            await user.update({
                firstName: firstName,
                lastName: lastName
            })
            await profile.update({
                firstName: firstName,
                lastName: lastName
            })
            await address.update({
                firstName: firstName,
                lastName: lastName
            })
            return res.redirect('/profile')
        }
    }
}

module.exports = {
    profileIndex,
    profileName
}