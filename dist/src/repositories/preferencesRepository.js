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
exports.insertReadingGoals = exports.insertFavoriteBookAndAuthor = exports.insertFavoriteGenre = exports.searchGenre = void 0;
const postgres_1 = __importDefault(require("../database/postgres"));
function searchGenre(genre) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield postgres_1.default.genre.findFirst({ where: {
                name: genre
            } });
    });
}
exports.searchGenre = searchGenre;
function insertFavoriteGenre(userId, genreId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield postgres_1.default.favoriteGenre.create({
            data: {
                userId: userId,
                genreId: genreId
            }
        });
    });
}
exports.insertFavoriteGenre = insertFavoriteGenre;
function insertFavoriteBookAndAuthor(userId, favoriteBook, favoriteAuthor) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield postgres_1.default.users.updateMany({
            where: {
                id: userId
            }, data: {
                favoriteAuthor: favoriteAuthor,
                favoriteBook: favoriteBook
            }
        });
    });
}
exports.insertFavoriteBookAndAuthor = insertFavoriteBookAndAuthor;
function insertReadingGoals(userId, readingGoals) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield postgres_1.default.users.updateMany({
            where: {
                id: userId
            }, data: {
                readingGoals: readingGoals
            }
        });
    });
}
exports.insertReadingGoals = insertReadingGoals;
