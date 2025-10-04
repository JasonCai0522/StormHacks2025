const bcrypt = require('bcrypt');
const User = require('../Model/User') 

const registerUser = async (req, res) => {
    const {username, password} = req.body;
    if (!username || !password) return res.status(400).json({"message": "username or password not found"});

    const duplicate = await User.findOne({username:username});
    console.log(duplicate);


    if (duplicate) return res.status(400).json({"message":"Already a user with that username"});

    try {
        // encrypting the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Creating and storing a new user
        const result = await User.create({
            "username":username,
            "password": hashedPassword
        })

        console.log(result);

        res.status(201).json({'success': `New user ${username} created!`})
    } catch (err) {
        res.status(500).json({ 'message' : err.message});
    }
}



module.exports = registerUser;