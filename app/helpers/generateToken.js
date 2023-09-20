const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
function generateString(length){
    let result = ' '
    const characterLength = characters.length
    for(let i = 0; i < length; i++){
        result += characters.charAt(Math.floor(Math.random() * characterLength))
    }
    return result
}

module.exports = generateString