const User = require('../Model/User');
const journalEntries = require('../Model/JournalEntry');

const getUserEntries = async (req, res) => {
    const username = req.username
    const foundUser = await User.findOne({username : username}).exec();
    const entryIds = foundUser.journalEntries;
    if (!entryIds) return res.sendStatus(400);
    
    const entries = [];
    console.log("test");
    for (const entryId of entryIds) {
        entry = await journalEntries.findOne({_id:entryId}).exec();
        entries.push(entry);
    }

    res.send(entries);
}


const createUserEntries = async (req, res) => {
    const username = req.username
    const entry = req.body.entry;
    if (!username || !entry) return res.sendStatus(400);
    
    const foundUser = await User.findOne({username : username}).exec();
    const result = await journalEntries.create(
        {
            "entry":entry,
        }
    )

    console.log(result._id.toString());

    foundUser.journalEntries.push(result._id.toString());
    await foundUser.save();

    return res.sendStatus(201);
}

module.exports = {
    getUserEntries,
    createUserEntries
}