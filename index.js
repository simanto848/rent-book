const express = require("express")
const fileUpload = require("express-fileupload")
const session = require("express-session")
const hbs = require("hbs")
const routes = require("./routes/index")
require("dotenv").config()
require("./app/models/index")
const {router} = require("express/lib/application");
const app = express()

// ------ Static Files ------ //
app.use(express.static("public"))
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// ------ Middleware ------ //
app.use(express.json())
app.use(express.urlencoded({ extended: true})) // for parsing application/x-www-form-urlencoded

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

// ------ Routes ------ //
app.use("/", routes)

// ------ Server Setup ------ //
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
})