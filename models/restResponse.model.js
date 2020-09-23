class RestResponse {
    constructor(message, success, value) {
        this.message = message,
            this.success = success,
            this.value = value
    }
    static ok(valueok) {
        return new RestResponse("", true, valueok);
    }
    static okMessage(messageok, valueok) {
        return new RestResponse(messageok, true, valueok);
    }
    static badRequest(messagebadrequest) {
        return new RestResponse(messagebadrequest, false);
    }
    static serverError(messageServerError) {
        return new RestResponse(messageServerError, false);
    }
}

module.exports = RestResponse;