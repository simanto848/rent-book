const User = require("../models/users")

// Verify User Account by token
const VerifyAccount = async (req, res) => {
    try{
        const token = req.query.token
        const verify = await User.findOne({ where: { verifyToken: token }})
        console.log(token)
        if(verify){
            await User.update({ verifyToken: null, isActive: true }, { where: { verifyToken: token }})
            return res.render("login", {
                alert: "Account verified successfully!!!"
            })
        }
        else {
            return res.render("login", {
                alert: "Invalid token!!!"
            })
        }
    } catch (e) {
        console.log(e)
        return res.status(500).send("Internal Server Error")
    }
}

module.exports = VerifyAccount