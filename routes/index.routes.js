const AuthStore = require('../stores/authentication.store');

module.exports = function (app) {
    app.use('/api/v1', require('../routes/unauth.routes'));
    // app.use('/api/v1', [AuthStore.authenticate], require('../routes/auth.routes'));
    // app.use('/api/v1/admin', [AuthStore.authenticate, AuthStore.isAdmin], require('../routes/admin.routes'));
};