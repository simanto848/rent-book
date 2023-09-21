const express = require("express")
const fileUpload = require("express-fileupload")
const ehb = require("express-handlebars")
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

// ------ Routes ------ //
app.use("/", routes)

// ------ Server Setup ------ //
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
})