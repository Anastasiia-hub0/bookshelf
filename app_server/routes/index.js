const express = require('express');
const router = express.Router();
const ctrlBooks = require('../controllers/books');
const ctrlUsers = require('../controllers/users');
const ctrlOthers = require('../controllers/others');

/* Books pages */
router.get('/', ctrlBooks.booklist);
router.get('/book', ctrlBooks.bookInfo);
router.get('/book/review/new', ctrlBooks.addReview);

/* User pages */
router.get('/login', ctrlUsers.login);
router.get('/register', ctrlUsers.register);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;