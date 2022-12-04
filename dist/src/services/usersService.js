"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.login = exports.createUser = void 0;
const usersRepository = __importStar(require("../repositories/usersRepository"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function createUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        //Roles of business: verify if email already exist
        const emailUser = yield usersRepository.findEmail(user);
        if (emailUser !== null) {
            throw { code: "conflict", message: "this account is already use" };
        }
        //Roles of business: cripty password
        const encryptedPassword = bcryptjs_1.default.hashSync(user.password, 10);
        user.password = encryptedPassword;
        //Roles of business: save new user
        const newUser = yield usersRepository.insertUser(user);
        const chave = process.env.JWT_SECRET;
        const configuracoes = { expiresIn: 60 * 60 * 24 * 30 };
        const token = jsonwebtoken_1.default.sign({ userId: newUser.id }, chave, configuracoes);
        return token;
    });
}
exports.createUser = createUser;
function login(user) {
    return __awaiter(this, void 0, void 0, function* () {
        ///Roles of business: Verify email and password
        const emailUser = yield usersRepository.findEmail(user);
        if (emailUser === null) {
            throw { code: "Unauthorized", message: "this email is not register" };
        }
        if (bcryptjs_1.default.compareSync(user.password, emailUser.password)) {
            const chave = process.env.JWT_SECRET;
            const configuracoes = { expiresIn: 60 * 60 * 24 * 30 };
            const token = jsonwebtoken_1.default.sign({ userId: emailUser.id }, chave, configuracoes);
            return token;
        }
        else {
            throw { code: "Unauthorized", message: "password incorrect" };
        }
    });
}
exports.login = login;
