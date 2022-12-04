"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchema = void 0;
function validateSchema(schema) {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, {
            abortEarly: false,
        });
        if (error) {
            const messageError = error.details.map((item) => item.message);
            return res.status(422).send(messageError);
        }
        next();
    };
}
exports.validateSchema = validateSchema;
