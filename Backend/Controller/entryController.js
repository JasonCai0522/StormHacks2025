const User = require('../Model/User');
const journalEntries = require('../Model/JournalEntry');

const getEntries = async (req, res) => {
    const entryIds = req.journalEntries;
    if (!entryIds) return res.sendStatus(400);
    
    const entries = [];

    for (const entryId of entryIds) {
        entry = await journalEntries.findOne({id_:entryId}).exec();
        entries.push(entry);
    }

    res.send(entries);
}


module.exports = {
    getEntries,
}