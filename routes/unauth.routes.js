const express = require('express');
const AccountCtrl = require('../controllers/account.controller');
const unauth = express.Router();

unauth
    .post('/account/register', AccountCtrl.register)
// .post('/account/login', AccountCtrl.login)

module.exports = unauth;