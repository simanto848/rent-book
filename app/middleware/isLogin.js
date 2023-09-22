const SessionChecker = (req, res, next) => {
    if(req.session.profile){
        next()
    } else {
        res.redirect("/user")
    }
}

module.exports = SessionChecker