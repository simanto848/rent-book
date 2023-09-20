const path = require("path")
const {response} = require("express");

const fileUpload = async (files, location, filekey) => {
    let profileImageName = null
    if(files && Object.keys(files).length > 0){
        const profileImage = files[filekey]
        const imageExt = path.extname(profileImage.name)
        profileImageName = location + Date.now() + imageExt
        const uploadPath = "public/" + profileImageName
        return await profileImage.mv(`${uploadPath}`).then(response => {
            return profileImageName
        }).catch(err => {
            return ''
        })
    }
}

module.exports = fileUpload