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
exports.makeLogin = exports.createBodyReview = void 0;
const faker_1 = require("@faker-js/faker");
const app_1 = __importDefault(require("../../src/app"));
const supertest_1 = __importDefault(require("supertest"));
const userFactory = __importStar(require("../factories/userFactory"));
function createBodyReview() {
    return __awaiter(this, void 0, void 0, function* () {
        return {
            title: faker_1.faker.lorem.words(1),
            image: "https://5934488p.ha.azioncdn.net/capas-livros/9788580570458-david-nicholls-um-dia-3826118685.jpg",
            author: faker_1.faker.lorem.words(1),
            genreId: 1,
            description: faker_1.faker.lorem.words(20)
        };
    });
}
exports.createBodyReview = createBodyReview;
function makeLogin() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield userFactory.createBodyUser();
        const createUser = yield (0, supertest_1.default)(app_1.default).post("/signup").send(user);
        expect(createUser.status).toEqual(201);
        const login = yield (0, supertest_1.default)(app_1.default).post("/signin").send({
            email: user.email,
            password: user.password
        });
        const token = login.text;
        return token;
    });
}
exports.makeLogin = makeLogin;
