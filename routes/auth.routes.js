const express = require('express');
const AccountCtrl = require('../controllers/account.controller');
const auth = express.Router();

auth
    .get('/account/self', AccountCtrl.self)
    .put('/account/:_id', AccountCtrl.update)
    .delete('/account/:_id', AccountCtrl.remove)
module.exports = auth;