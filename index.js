const express = require("express")
const fileUpload = require("express-fileupload")
const ehb = require("express-handlebars")
require("dotenv").config()
require("./app/models/index")
const app = express()

// ------ Static Files ------ //
app.use(express.static("public"))

// ------ Middleware ------ //
app.use(express.json())
app.use(express.urlencoded({ extended: true})) // for parsing application/x-www-form-urlencoded

// ------ Routes ------ //

// ------ Server Setup ------ //
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
})