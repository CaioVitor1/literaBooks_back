"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandler(error, req, res, next) {
    console.log(error);
    if (error.code === "Unauthorized") {
        return res.status(401).send(error.message);
    }
    if (error.code === "notFound") {
        return res.status(404).send(error.message);
    }
    if (error.code === "Unprocessable_Entity") {
        return res.status(422).send(error.message);
    }
    if (error.code === "conflict") {
        return res.status(409).send(error.message);
    }
    if (error.message === "invalid token") {
        return res.status(401).send(error.message);
    }
    return res.status(500).send(error); // internal server error
}
exports.default = errorHandler;
