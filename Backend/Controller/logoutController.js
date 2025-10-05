const User = require('../Model/User');

const logoutUser = async (req, res) => {
    // On client, delete the access token
    const cookies = req.cookies;

    // Check if user exists
    if (!cookies?.jwt) return res.sendStatus(204); // No content
    const refreshToken = cookies.jwt;

    // Checking if refreshToken is in the DB
    const foundUser = await User.findOne({refreshToken}).exec();
        
    if (!foundUser) {
        res.clearCookie('jwt', {httpOnly: true, maxAge: 24 * 60 * 60 * 1000, sameSite: 'None', secure: true});
        return res.sendStatus(204);
    }
    
    // Delete refresh token from user
    foundUser.refreshToken = "";
    const result = await foundUser.save();
    console.log(result);

    res.clearCookie('jwt', {httpOnly: true, maxAge: 24 * 60 * 60 * 1000, sameSite: 'None', secure: true});
    res.sendStatus(204);
}

module.exports = logoutUser;