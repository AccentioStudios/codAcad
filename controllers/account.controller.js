var express = require('express'),
    router = express.Router(),
    RestResponse = require('../models/restResponse.model'),
    ENUM = require('../helpers/enum.helpers'),
    {
        User
    } = require('../stores/db.store');

var developmentMode = process.env.NODE_ENV == 'production' ? false : true;

class AccountController {

    static async register(req, res) {
        console.log("Register Action...")
        try {
            const newUser = req.body;
            // var validate = user.validateSchema();
            // if (validate.error) {
            //     return res.status(400).send(RestResponse.badRequest(developmentMode ? validate.error : ENUM.BAD_REQUEST_NEW_USER));
            // }
            var payload = await User.create(req.body);

            console.log("payload result", payload);
            // console.log("payload", payload);
            return res.send(payload);
        } catch (exception) {
            console.log(exception);
            return res.status(500).send(RestResponse.badRequest(developmentMode ? exception.message : ENUM.BAD_REQUEST_NEW_USER));
        }
    }


    static async getAll(req, res) {
        try {
            let payload = await AccountStore.getAllUsers(req);
            res.send(payload);
        } catch (exception) {
            res.status(500).send(exception)
        }
    }
}

module.exports = AccountController;