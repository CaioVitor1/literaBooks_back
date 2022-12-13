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
const postgres_1 = __importDefault(require("../src/database/postgres"));
const recommendationsFactory = __importStar(require("../prisma/factories/recommendationsFactory"));
const genreFactory = __importStar(require("../prisma/factories/genreFactory"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const genre = yield postgres_1.default.genre.findFirst();
        if (genre === null) {
            const newGenres = yield genreFactory.createGenre();
            yield postgres_1.default.genre.createMany({
                data: newGenres
            });
        }
        else {
            console.log("genres already register");
        }
        const recommendations = yield postgres_1.default.recommendations.findFirst();
        if (recommendations === null) {
            const newRecommendations = yield recommendationsFactory.createRecommendations();
            yield postgres_1.default.recommendations.createMany({
                data: newRecommendations
            });
        }
        else {
            console.log("Recommendations already register");
        }
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield postgres_1.default.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield postgres_1.default.$disconnect();
    process.exit(1);
}));
