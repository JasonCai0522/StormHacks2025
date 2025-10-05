const User = require('../Model/User');
const journalEntries = require('../Model/JournalEntry');
const JournalEntry = require('../Model/JournalEntry');

const getUserEntries = async (req, res) => {
    const username = req.username
    const foundUser = await User.findOne({username : username}).exec();
    const entryIds = foundUser.journalEntries;
    if (!entryIds) return res.sendStatus(400);
    
    const entries = [];
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

const updateUserEntries = async (req, res)  => {
    if (!req?.body?.id) {
        return res.status(400).json({ 'message': 'ID parameter is required.' });
    }

    const foundEntry = await JournalEntry.findOne({_id:req.body.id}).exec();
    if (!foundEntry) res.status(204).json({"message": "No journal entry matches that id"});

    foundEntry.entry = req.body.entry;
    foundEntry.date = Date.now();
    const result = await foundEntry.save()
    return res.json(result);
}

const deleteUserEntries = async (req, res) => {
    if (!req?.body?.id) {
        return res.status(400).json({ 'message': 'ID parameter is required.' });
    }

    const foundEntry = await JournalEntry.findOne({_id:req.body.id}).exec();
    if (!foundEntry) res.status(204).json({"message": "No journal entry matches that id"});

    const result = await foundEntry.deleteOne();
    return res.json(result);
}

module.exports = {
    getUserEntries,
    createUserEntries,
    updateUserEntries,
    deleteUserEntries
}