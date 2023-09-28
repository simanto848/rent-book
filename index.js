const express = require("express")
const fileUpload = require("express-fileupload")
const session = require("express-session")
const hbs = require("hbs")
const routes = require("./routes/index")
// const CustomError = require("./app/helpers/customError")
const flash = require("connect-flash")
const logger = require("morgan")
require("dotenv").config()
require("./app/models/index")
const app = express()

// ------ Express Session ------ //
app.use(session({
    key: "session",
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}))

// ------ Static Files ------ //
app.use(express.static("public"))
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// ------ Middleware ------ //
app.use(express.json())
app.use(express.urlencoded({ extended: false})) // for parsing application/x-www-form-urlencoded
app.use((logger('dev')))
app.use(fileUpload())
app.use(flash())
app.use((req, res, next) => {
    res.locals.message = req.session.message
    delete req.session.message
    next()
})

// ------ Routes ------ //
app.use("/", routes)
// app.all("*", (req, res, next) => {
//     const err = new CustomError(`Can't find ${req.originalUrl} on the server`, 404)
//     next()
// })

// ------ Server Setup ------ //
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
})