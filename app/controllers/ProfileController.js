const User = require('../models/users');
const Profile = require('../models/profiles');
const Address = require('../models/addresses');

const profileIndex = async (req, res) =>{
    const userId = req.session.profile.id
    const isProfile = await Profile.findOne({where: {userId: userId}})
    const isAddress = await Address.findOne({where: {userId: userId}})
    return res.render('profile', {
        profile: isProfile,
        address: isAddress
    });
}

const profileName = async (req, res) =>{
    const userId = req.session.profile.id
    const {firstName, lastName} = req.body

    if(req.method === "POST"){
        if(!firstName || !lastName){
            return res.redirect('/profile')
        }
        else {
            const isProfile = await Profile.findOne({where: {userId: userId}})
            if(!isProfile){
                const profile = await Profile.create({
                    firstName: firstName,
                    lastName: lastName,
                    userId: userId
                })
                return res.redirect('/profile')
            }
            else {
                const profile = await Profile.update({
                    firstName: firstName,
                    lastName: lastName,
                },{
                    where: {userId: userId}
                })
                return res.redirect('/profile')
            }
        }
    }
}

const addressIndex = async (req, res) =>{
    const userId = req.session.profile.id
    const { address, city, state, postalCode, country } = req.body
    if(!address && !city && !state && !postalCode && !country){
        return res.redirect('/profile')
    }
    else {
        const isAddress = await Address.findOne({where: {userId: userId}})
        if(!isAddress){
            const addressCreate = await Address.create({
                address: address,
                city: city,
                state: state,
                postalCode: postalCode,
                country: country,
                userId: userId
            })
            return res.redirect('/profile')
        }
        else {
            const addressUpdate = await Address.update({
                address: address,
                city: city,
                state: state,
                postalCode: postalCode,
                country: country,
            },{
                where: {userId: userId}
            })
            return res.redirect('/profile')
        }
    }
}

module.exports = {
    profileIndex,
    profileName,
    addressIndex
}