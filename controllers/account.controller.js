var express = require('express'),
    router = express.Router(),
    User = require('../models/user.model'),
    logger = require('../middlewares/logger'),
    RestResponse = require('../models/restResponse.model'),
    ENUM = require('../helpers/enum.helpers')

class AccountController {

    static async register(req, res) {
        try {
            const user = new User(
                req.body.firstName,
                req.body.lastName,
                req.body.email,
                req.body.password,
                req.body.role,
            );

            var validate = User.validateSchema(user);
            if (validate.error) {
                res.status(400).send(RestResponse.badRequest(ENUM.BAD_REQUEST_NEW_USER));
            }

            let payload = await user.create();
            res.send(payload);
        } catch (exception) {
            res.status(500).send(exception)
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