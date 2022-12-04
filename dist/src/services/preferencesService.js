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
exports.choiceReadingGoals = exports.choiceBookAndAuthor = exports.choiceFavoriteGenre = void 0;
const preferencesRepository = __importStar(require("../repositories/preferencesRepository"));
function choiceFavoriteGenre(userId, genre1, genre2, genre3) {
    return __awaiter(this, void 0, void 0, function* () {
        const firtsGenre = yield preferencesRepository.searchGenre(genre1);
        const secondGenre = yield preferencesRepository.searchGenre(genre2);
        const thirtGenre = yield preferencesRepository.searchGenre(genre3);
        if (firtsGenre === null || secondGenre === null || thirtGenre === null) {
            throw { code: "notFound", message: "this genre is not register" };
        }
        const genre1Id = firtsGenre.id;
        const genre2Id = secondGenre.id;
        const genre3Id = thirtGenre.id;
        const insertGenre1 = yield preferencesRepository.insertFavoriteGenre(userId, genre1Id);
        const insertGenre2 = yield preferencesRepository.insertFavoriteGenre(userId, genre2Id);
        const insertGenre3 = yield preferencesRepository.insertFavoriteGenre(userId, genre3Id);
    });
}
exports.choiceFavoriteGenre = choiceFavoriteGenre;
function choiceBookAndAuthor(userId, favoriteBook, favoriteAuthor) {
    return __awaiter(this, void 0, void 0, function* () {
        const updateBooksAndAuthor = yield preferencesRepository.insertFavoriteBookAndAuthor(userId, favoriteBook, favoriteAuthor);
    });
}
exports.choiceBookAndAuthor = choiceBookAndAuthor;
function choiceReadingGoals(userId, readingGoals) {
    return __awaiter(this, void 0, void 0, function* () {
        const updateReadingGoals = yield preferencesRepository.insertReadingGoals(userId, readingGoals);
    });
}
exports.choiceReadingGoals = choiceReadingGoals;
