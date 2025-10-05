const express = require('express');
const router = express.Router();

// Controllers
const {getUserEntries, createUserEntries} = require('../../Controller/entryController');

router.route('/journal')
    .get(getUserEntries)
    .post(createUserEntries);
//    .put()
//    .delete();


module.exports = router;