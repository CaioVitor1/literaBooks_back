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
exports.choiceReadingGols = exports.usersPreferences = exports.choiceFavoriteGenre = void 0;
const preferencesService = __importStar(require("../services/preferencesService"));
function choiceFavoriteGenre(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { genre1, genre2, genre3 } = req.body;
        const userId = res.locals.session;
        yield preferencesService.choiceFavoriteGenre(Number(userId), genre1, genre2, genre3);
        return res.status(201).send("insert preferences with succesful");
    });
}
exports.choiceFavoriteGenre = choiceFavoriteGenre;
function usersPreferences(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { favoriteBook, favoriteAuthor } = req.body;
        const userId = res.locals.session;
        yield preferencesService.choiceBookAndAuthor(Number(userId), favoriteBook, favoriteAuthor);
        return res.status(201).send("Favorite Author and books includes in your perfil");
    });
}
exports.usersPreferences = usersPreferences;
function choiceReadingGols(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { readingGoals } = req.body;
        const userId = res.locals.session;
        yield preferencesService.choiceReadingGoals(Number(userId), Number(readingGoals));
        return res.status(200).send("Reading goals includs in your perfil");
    });
}
exports.choiceReadingGols = choiceReadingGols;
