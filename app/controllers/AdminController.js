const Admin = require("../models/superadmin")
const bcrypt =require("bcrypt")
const {Op} = require("sequelize");

const index = (req, res) => {
    return res.render("admins/index")
}

const login = async (req, res) => {
    try{
        const { username, password } = req.body
        if(!username || !password)
                return res.render("admins/index", {error: "Please enter credentials"})
        else {
            if(req.method === "POST"){
               const adminInfo = Admin.findOne({
                   where: {
                       [Op.or]: [
                           {username: username},
                           {email: username}
                       ]
                   }
               })
                if(! await bcrypt.compare(password, adminInfo.password)){
                    return res.render("admins/index", {
                        alert: "Invalid credentials"
                    })
                }
                else {
                    if(adminInfo.role === true){
                        // session create
                        return res.redirect("/")
                    }
                    else {
                        return res.redirect("/admin")
                    }
                }
            }
        }
    } catch (e) {
        console.log(e)
        res.status(500).send("Internal Server Error")
    }
}

module.exports = {index, login}