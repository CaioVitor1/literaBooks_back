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
exports.findReview = exports.findReviewsUser = exports.findRecommendations = exports.findFavoriteGenres = exports.insertReview = void 0;
const postgres_1 = __importDefault(require("../database/postgres"));
function insertReview(userId, review) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield postgres_1.default.reviews.create({
            data: {
                author: review.author,
                description: review.description,
                image: review.image,
                title: review.title,
                genreId: review.genreId,
                userId: userId
            }
        });
    });
}
exports.insertReview = insertReview;
function findFavoriteGenres(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield postgres_1.default.favoriteGenre.findMany({
            where: {
                userId: userId
            }
        });
    });
}
exports.findFavoriteGenres = findFavoriteGenres;
function findRecommendations(genre) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield postgres_1.default.reviews.findMany({
            where: {
                genreId: genre
            }
        });
    });
}
exports.findRecommendations = findRecommendations;
function findReviewsUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield postgres_1.default.reviews.findMany({
            where: {
                userId: userId
            }
        });
    });
}
exports.findReviewsUser = findReviewsUser;
function findReview(bookId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield postgres_1.default.reviews.findUnique({
            where: {
                id: bookId
            }
        });
    });
}
exports.findReview = findReview;
