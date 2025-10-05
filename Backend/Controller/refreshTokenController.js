const User = require('../Model/User');
const jwt = require('jsonwebtoken');


const refreshAccessToken = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;

    const foundUser = await User.findOne({refreshToken:refreshToken}).exec();
    
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err || foundUser.username !== decoded.username) return res.sendStatus(403);
            const accessToken = jwt.sign(
                {"UserInfo":
                    {
                        "username": foundUser.username,
                        "journalEntries":foundUser.journalEntries,
                    }
                }, // Payload, don't include sensitive information like passwords here
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn : '5m'}
            )
            res.json({ accessToken});
        }
    )
}

module.exports = refreshAccessToken;