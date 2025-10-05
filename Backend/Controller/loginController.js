const bcrypt = require('bcrypt');
const User = require('../Model/User');
const jwt = require('jsonwebtoken')


const loginUser = async (req, res) => {
    const {username, password} = req.body;
    if (!username || !password) return res.status(400).json({"message": "username or password not found"});
    
    const foundUser = await User.findOne({username:username}).exec();
    if (!foundUser) return res.status(400).json({"message": "user not found"});


    if (await bcrypt.compare(password, foundUser.password)) {
        
        console.log(foundUser);
        const accessToken = jwt.sign(
            {userInfo: 
                {
                    "username": username,
                    "journalEntries":foundUser.journalEntries,
                }
            }, // Payload
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: "5m"}
        )

        const refreshToken = jwt.sign( 
            {
                "username": username,
            }
            , // Payload
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn: "1d"}
        )

        foundUser.refreshToken = refreshToken;
        const result = await foundUser.save()
        console.log(result);

        res.cookie('jwt', refreshToken, {httpOnly: true, maxAge: 24 * 60 * 60 * 1000, sameSite: 'None'})
        res.status(200).json({accessToken})
    }
}

module.exports = loginUser;