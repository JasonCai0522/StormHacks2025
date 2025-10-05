const express = require('express');
const router = express.Router();

// Controllers
const {getUserEntries, createUserEntries, updateUserEntries, deleteUserEntries} = require('../../Controller/entryController');

router.route('/journal')
    .get(getUserEntries)
    .post(createUserEntries)
    .put(updateUserEntries)
    .delete(deleteUserEntries);


module.exports = router;