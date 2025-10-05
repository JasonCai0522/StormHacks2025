const express = require('express');
const router = express.Router();

// Controllers
const {getEntries} = require('../../Controller/entryController');

router.route('/journal')
    .get(getEntries);
//    .post()
//    .put()
//    .delete();


module.exports = router;