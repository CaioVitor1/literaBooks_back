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
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const userService = __importStar(require("../../src/services/usersService"));
const usersFactory = __importStar(require("../factories/userFactory"));
const usersRepository = __importStar(require("../../src/repositories/usersRepository"));
describe("", () => {
    beforeEach(() => {
        globals_1.jest.resetAllMocks();
        globals_1.jest.clearAllMocks();
    });
    it("create a user with email already register", () => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield usersFactory.createBodyUser();
        globals_1.jest.spyOn(usersRepository, "findEmail")
            .mockResolvedValueOnce({
            id: 1,
            email: "caiovitor@hotmail.com",
            name: "caio",
            password: "caio123!",
            image: "aaaaa",
            nextReading: 2,
            favoriteBook: "Um dia",
            favoriteAuthor: "Nicholas",
            readingGoals: 3
        });
        globals_1.jest.spyOn(usersRepository, "insertUser")
            .mockImplementationOnce(() => { });
        const promise = userService.createUser(user);
        expect(promise).rejects.toEqual({
            message: "this account is already use",
            code: "conflict"
        });
        expect(usersRepository.insertUser).not.toBeCalled();
    }));
    it("create a new user", () => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield usersFactory.createBodyUser();
        globals_1.jest.spyOn(usersRepository, "findEmail")
            .mockImplementationOnce(() => null);
        globals_1.jest.spyOn(usersRepository, "insertUser")
            .mockImplementationOnce(() => { });
        const promise = yield userService.createUser(user);
        expect(usersRepository.findEmail).toBeCalled();
        expect(usersRepository.insertUser).toBeCalled();
    }));
    it("login with email not register", () => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield usersFactory.createBodyUser();
        globals_1.jest.spyOn(usersRepository, "findEmail")
            .mockImplementationOnce(() => null);
        const promise = userService.createUser(user);
        expect(promise).rejects.toEqual({
            message: "this email is not register",
            code: "Unauthorized"
        });
        expect(usersRepository.insertUser).not.toBeCalled();
    }));
});
