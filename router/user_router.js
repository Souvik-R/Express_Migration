const router = require('express').Router();
const userController = require('../controller/user.controller');

router.post('/userList', userController.userList);

module.exports = router;