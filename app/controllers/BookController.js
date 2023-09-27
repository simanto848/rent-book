const User = require("../models/users")
const Category = require("../models/categories")
const Keyword = require("../models/keywords")
const Book = require("../models/books")
const fileUpload = require("../helpers/fileupload")
const {Op} = require("sequelize");
const { postSchema } = require("../helpers/validationSchema")

const index = (req, res) => {
    return res.render("bookIndex")
}

const createPost = async (req, res) => {
    // if(!req.files || !req.files.coverPicture){
    //     return res.status(400).send("No files were uploaded")
    // }
    // category, keyword
    const userId = req.session.profile.id
    try{
        if(req.method === "POST"){
            const {error, value} = await postSchema.validateAsync(req.body, {abortEarly: false})
            if(error){
                console.log(error.details.map(err => err.message))
            }
            else {
                console.log("Validation successful:", value)
            }
            // if(result.error)
                const isSameBook = await Book.findOne({
                    where: {
                        [Op.and]: [
                            {title: req.body.title},
                            {userId: userId}
                        ]
                    }
                })

                const bookCoverImage = req.files
                const bookCoverImageName = await fileUpload(bookCoverImage, "/uploads/booksCover/", "coverPicture")

                if (!isSameBook){
                    const bookPayload = req.body
                    bookPayload.picture = bookCoverImageName
                    bookPayload.userId = userId
                    // delete bookPayload.title
                    // const newPayload = Object.assign({}, bookPayload)
                    const book = await Book.create(bookPayload)
                    if(book){
                        // req.flash("success", "Book has been added")
                        return res.redirect("/book")
                    }
                    else {
                        // req.flash("error", "Failed to add book")
                        return res.redirect("/book")
                    }
                }
                else {
                    // req.flash("error", "Same Book already exist")
                    return res.redirect("/book")
                }
        }
    } catch (error) {
        console.log(error)
        if(error.isJoi === true) error.status = 422

        return res.status(500).redirect("/book")
    }
}

module.exports = {
    index,
    createPost
}