const joi = require("joi")

const postSchema = joi.object({
    title: joi.string().required(),
    author: joi.string().required(),
    description: joi.string().required(),
    language: joi.string().required(),
    pages: joi.number().required(),
    condition: joi.string().required(),
    weight: joi.number().required(),
    quantity: joi.number().integer().min(1).required(),
    // category: joi.string().required().valid("new", "old")
    // customName: joi.string().custom((value, msg) => {
    //     if(value === "test"){
    //         return msg.message("Not allow test name")
    //     }
    //     return true
    // })
})

module.exports = {
    postSchema
}