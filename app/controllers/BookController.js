const User = require("../models/users")
const Category = require("../models/categories")
const Book = require("../models/books")
const fileUpload = require("../helpers/fileupload")
const {Op} = require("sequelize");
const { postSchema } = require("../helpers/validationSchema")

const index = async (req, res) => {
    const categories = await Category.findAll()
    return res.render("bookIndex", {categories: categories})
}

const createPost = async (req, res) => {
    if(!req.files || !req.files.coverPicture){
        return res.status(400).send("No files were uploaded")
    }
    // category, keyword
    const user_id = req.session.profile.id
    try{
        if(req.method === "POST"){
            await postSchema.validateAsync(req.body, {abortEarly: false})

            const isSameBook = await Book.findOne({
                where: {
                    [Op.and]: [
                        {title: req.body.title},
                        {user_id: user_id}
                    ]
                }
            })

            const bookCoverImage = req.files
            let bookCoverImageName = await fileUpload(bookCoverImage, "/uploads/booksCover/", "coverPicture")
            // const keywords = req.body.keyword.split(",").map(keyword => keyword.trim());

            if (!isSameBook){
                const bookPayload = req.body
                const category_id = req.body.category
                bookPayload.picture = bookCoverImageName
                bookPayload.user_id = user_id
                bookPayload.category_id = category_id

                // delete bookPayload.keyword
                // const newPayload = Object.assign({}, bookPayload)
                const book = await Book.create(bookPayload)
                if(book){
                    req.session.message = {
                        type: "warning",
                        message: "Book has been added!!!"
                    }
                    return res.redirect("/book")
                } else {
                    req.session.message = {
                        type: "warning",
                        message: "Failed to add book!!!"
                    }
                    return res.redirect("/book")
                }
            } else {
                req.session.message = {
                    type: "warning",
                    message: "Same Book already exist!!!"
                }
                return res.redirect("/book")
            }
        }
    } catch (error) {
        console.log(error)
        if(error.isJoi === true) error.status = 422

        return res.status(500).redirect("/book")
    }
}

const deletePost = async (req, res) => {
    const bookId = req.params.id
    const deleteBook = await Book.destroy({
        where: {
            id: bookId
        }
    })
    if(deleteBook){
        req.session.message = {
            type: "warning",
            message: "Book has been deleted!!!"
        }
        return res.redirect("/book")
    }
    else {
        req.session.message = {
            type: "warning",
            message: "Failed to delete book!!!"
        }
        return res.redirect("/book")
    }
}

module.exports = {
    index,
    createPost,
    deletePost
}