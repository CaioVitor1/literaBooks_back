"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function validateToken(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { authorization } = req.headers;
        if (!authorization) {
            throw { code: "Unauthorized", message: "requisition must have a token" };
        }
        const token = authorization === null || authorization === void 0 ? void 0 : authorization.replace('Bearer ', '');
        const chaveSecreta = process.env.JWT_SECRET;
        const { userId } = jsonwebtoken_1.default.verify(token, chaveSecreta);
        if (!token || !userId) {
            return res.sendStatus(401);
        }
        res.locals.session = userId;
        next();
    });
}
exports.validateToken = validateToken;
