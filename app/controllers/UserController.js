const User = require("../models/users")
const sendMail = require("../helpers/mail")
const generateToken = require("../helpers/generateToken")
const bcrypt = require("bcrypt")
const {Op} = require("sequelize")

const index = (req, res) => {
    res.render("login")
}

const register = (req, res) => {
    res.render("signup")
}

const signup = async (req, res) => {
    try{
        const  { email, username, password } = req.body
        if(req.method === "POST"){
            if(!email || !username || !password){
                return res.render("signup", {
                    alert: "Please fill all the fields!!!"
                })
            }

            const emailData = await User.findOne({ where: { email: email }})
            if(emailData){
                return res.render("signup", {
                    alert: "Email already exists!!!"
                })
            }
            else {
                const usernameData = await User.findOne({ where: {username: username}})
                if(usernameData){
                    return res.render("signup", {
                        alert: "Username already taken!!!"
                    })
                } else {
                    const hashedPassword = await bcrypt.hash(password, 10)
                    const token = generateToken(10)
                    const insert = await User.create({
                        email: email,
                        username: username,
                        password: hashedPassword,
                        verifyToken: token
                    })
                    if(insert){
                        await sendMail(email, token)
                        return res.redirect("/user")
                    }
                }
            }
        }

    } catch (e) {
        console.log(e)
        return res.status(500).send("Internal Server Error")
    }
}

const login = async (req, res) => {
    try {
        const { username, password } = req.body
        if(!username || !password){
            return res.render("login", {
                alert: "Please fill all the fields!!!"
            })
        }
        else {
            if(req.method === "POST"){
                const user = await User.findOne({
                    where: {
                        [Op.or]: [
                            { email: username },
                            { username: username }
                        ]
                    }
                })
                if(!await  bcrypt.compare(password, user.password)){
                    return res.render("login", {
                        alert: "Invalid Credentials!!!"
                    })
                }
                else {
                    if(user.isActive === true && user.role === false){
                        req.session.profile = user.dataValues
                        return res.redirect("/")
                    }
                }
            }
        }
    } catch (e) {
        console.log(e)
        return res.status(500).send("Internal Server Error")
    }
}

module.exports = {
    index,
    register,
    signup,
    login
}