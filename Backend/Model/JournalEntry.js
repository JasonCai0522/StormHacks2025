const mongoose = require()
const Schema = mongoose.Schema;

const entrySchema = new Schema({
  entry: {
    type: String,
    required: true,
  },
  date: {
    type: date,
    required: true,
  },
  journalEntries: [{ journalid_: String }],
});

module.exports = mongoose.model('journalEntry', entrySchema);
