const bcrypt = require('bcrypt');


const registerUser = async (req, res) => {
    const {username, password} = req.body;
    if (!username || !password) return res.status(400).json({"message": "username and password not found"});

    


} 


module.exports = registerUser;