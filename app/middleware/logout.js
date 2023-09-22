const logout = async (req, res) => {
    req.session.destroy(function (err){
        if(err){
            console.log(err);
            res.redirect('/user');
        }
        else
        {
            res.redirect('/user');
        }
    })
}

module.exports = logout