const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const entrySchema = new Schema({
  entry: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  journalEntries: [{ journalid_: String }],
});

module.exports = mongoose.model('journalEntry', entrySchema);
