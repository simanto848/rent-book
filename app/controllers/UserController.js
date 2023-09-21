const index = (req, res) => {
    res.render("login")
}

const register = (req, res) => {
    res.render("signup")
}

module.exports = {
    index,
    register
}